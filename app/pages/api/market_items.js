import { dbGet, getCourseByRegion, passport_middleware } from "../../api_tools";
import nextConnect from 'next-connect'
export default nextConnect()
    .use(passport_middleware)
    .get(async (req, res) => {
      console.log(req.region)
      let res_db = await dbGet('SELECT id, name, price, hot FROM products WHERE region=? ORDER BY hot DESC LIMIT 50', [req.region]);
      if (res_db.length > 0) {
        let product_ids = res_db.map((val, i) => val.id).join(',');
        let benefits = await dbGet('SELECT id, product_id, text FROM products_benefits WHERE product_id IN (' + product_ids + ')');
        let sortedBenefits = {};
        for (let i = 0; i < benefits.length; i++) {
          let curr_benefit = benefits[i];
          
          let product_id = curr_benefit.product_id
          if(!sortedBenefits[product_id]) sortedBenefits[product_id] = [];
          sortedBenefits[product_id].push(curr_benefit)
        }
        let courseMoney = await getCourseByRegion(req.region);

        res_db = res_db.map((val, i) => {
          let add_info_prod = {...val};
          add_info_prod.price = (add_info_prod.price * courseMoney.paytoMoney).toFixed(1);
          add_info_prod.currency_name = courseMoney.name;
          if(add_info_prod.id in sortedBenefits) {
            add_info_prod.benefits = sortedBenefits[add_info_prod.id]
          } else {
            add_info_prod.benefits = []
          }

          return add_info_prod;
        })
      }
      res.json(res_db)
    })
    