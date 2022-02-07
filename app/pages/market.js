import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import {
  Caption,
  Header,
  Header2,
  Paragraph,
  RLayout, SignBase
} from '../components';
import { API_URL } from '../config';
import { lang } from '../providers';
import { getLanguage } from '../src';
import styles from './market.module.css'



const Home = props => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    let mount = true;
    fetch(`${API_URL}/market_items?reg=${lang.locale}`)
    .then(res => res.json())
    .then(products => {
      if(!mount) return;
      setProducts(products)
    })
    return () => mount = false;
  }, [lang.locale])
  return (
    <div>
      <Paragraph
        head={<>
          <Header color={'var(--red)'}>
            {lang.t('page_names.market')}
          </Header>
          <Caption mt={1.5} mb={4}>
            {lang.t('page_names.market_descr')}
          </Caption></>}>
        <SignBase className={styles.promo_sign}>
          {products ? products.lenght === 0 ? 
          <div className={styles.promo_placeholder}>
            <Header>{console.log('assfd')}
              {lang.t('placeholders.empty_region')}
            </Header>
          </div> : products.map((val, i) => 
          <Box className={styles.card}
          key={val.id}>
            <Caption>
              {lang.t('repeated.subscription')}
            </Caption>
            <h1 style={{fontSize: 64, lineHeight: 0.9, marginBottom: 40}}>
              {val.name}
            </h1>
            <Box mb={2}>
              {val.benefits.map((benefit, ind) => 
              <Caption>
                {benefit.text}
              </Caption>)}
            </Box>
            <Box mb={2}>
              <Header2>
                {val.price} {val.currency_name} /{lang.t('repeated.month')}
              </Header2>
            </Box>
            <Button sx={{ width: '100%' }} size='large' variant='contained' sx={{color: '#000', background: '#fff'}}>
              {lang.t('repeated.purchase')}
            </Button>
          </Box>
          ) : null}
        </SignBase>
      </Paragraph>
    </div>
  )
}
Home.Layout = RLayout;
export default Home;