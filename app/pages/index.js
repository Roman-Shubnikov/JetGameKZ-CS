import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { Caption, Header, RLayout, SignBase } from '../components';
import { lang } from '../providers';

import styles from './index.module.css'
const Home = () => {
  return (
    <div className="container">
      <Header color={'var(--red)'}>
        {lang.t('repeated.greeting')}
      </Header>
      <Caption mt={1.5} mb={4}>
        {lang.t('repeated.project_descr')}
      </Caption>
      <SignBase className={styles.promo_sign}>
        <div className={styles.promo_all}>
          <Box className={styles.promo_texts}>
            <Box className={styles.promo_header + " header"}>
              {lang.t('promo.donut_need')}
            </Box>
            <Box className={styles.promo_description + " description"}>
              {lang.t('promo.donut_need_descr')}
            </Box>
            <Button className={styles.promo_button} sx={{width: '70%'}} size='large' variant='contained'>
              {lang.t('repeated.play')}
            </Button>
          </Box>
          <div className={styles.promo_container_img}>
            <img 
            className={styles.promo_img}
            src='/assets/CTandT_main.png'
            alt='ct_t' />
          </div>
          
        </div>
      </SignBase>
      <Box>
        <Header>
          {lang.t('repeated.greeting')}
        </Header>
      </Box>
    </div>
  )
}
Home.Layout = RLayout;
export default Home;