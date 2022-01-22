import { RLayout } from '../components';
import { lang } from '../providers';
const Home = () => {
  return (
    <div className="container">
      <div>{lang.t('nav.main')}</div>
    </div>
  )
}
Home.Layout = RLayout;
export default Home;