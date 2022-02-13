import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Caption,
  Cell,
  Header,
  Paragraph,
  RLayout, SignBase
} from '../components';
import { API_URL } from '../config';
import { lang } from '../providers';
import styles from './index.module.css'

const Home = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    let mount = true;
    fetch(`${API_URL}/news?reg=${lang.locale}`)
    .then(res => res.json())
    .then(news => {
      if(!mount) return;
      setNews(news);
    })
    return () => mount = false;
  }, [lang.locale])
  useEffect(() => {
    let mount = true;
    fetch(`${API_URL}/tops?reg=${lang.locale}`)
    .then(res => res.json())
    .then(news => {
      if(!mount) return;
      setNews(news);
    })
    return () => mount = false;
  }, [lang.locale])
  return (
    <div>
      <Paragraph
        head={<>
          <Header color={'var(--red)'}>
            {lang.t('repeated.greeting')}
          </Header>
          <Caption mt={1.5} mb={4}>
            {lang.t('repeated.project_descr')}
          </Caption></>}>
        <SignBase className={styles.promo_sign}>
          <div className={styles.promo_all}>
            <Box className={styles.promo_texts}>
              <Box className={styles.promo_header + " header"}>
                {lang.t('promo.donut_need')}
              </Box>
              <Box className={styles.promo_description + " description"}>
                {lang.t('promo.donut_need_descr')}
              </Box>
              <Button className={styles.promo_button} sx={{ width: '70%' }} size='large' variant='contained'>
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
      </Paragraph>
      <Paragraph
        head={<Header>{lang.t('repeated.news')}</Header>}>
        <Swiper slidesPerView='auto' 
        freeMode={true}
        pagination={true} navigation={true} spaceBetween={30} className={styles.news_swiper}>
          
            {Array(10).fill().map((_,i) => 
            <SwiperSlide className={styles.news_card}
            key={i}>
              <div className={styles.news_card_g}></div>
              <div className={styles.news_card_content}>
                Test {i}
                <Caption className='description'>
                  <img src='/assets/clock.svg' alt='clock' style={{marginRight: 6}} />
                  {'11.111.11.1 111:11'}
                </Caption>
              </div>
              
              
            </SwiperSlide>
            )}
        </Swiper>
      </Paragraph>
      <Paragraph
      head={<Header>{lang.t('repeated.statistic')}</Header>}>
        <SignBase>

        </SignBase>
      </Paragraph>
      <Paragraph
      head={<Header>{lang.t('repeated.servers')}</Header>}>
        <SignBase>
          
        </SignBase>
      </Paragraph>
      <Paragraph
      head={<Header>{lang.t('repeated.statistics_player')}</Header>}>
        <SignBase className={styles['statistics-player']}
        sx={{flexDirection: {xs: 'column', lg: 'row'}}}>
          <Box className={styles['statistics-player_rank']}>
            <Header mb={4} mt={2}>{lang.t('pages_content.top_rank')}</Header>
            {Array(6).fill().map((x,i) => 
              <Cell
              className={styles['statistics-player_cell']}
              position={i}
              description='aads'
              after={<img style={{marginLeft: 15}} src='/assets/rank_icons/1.png' alt='rank' />}>
                hjdhda uyhahujasd
              </Cell>
            )}
          </Box>
          <Box className={styles['statistics-player_sep']}
          sx={{display: {xs: 'none', lg: 'block'}}}></Box>
          <Box className={styles['statistics-player_rank']}>
            <Header mb={4} mt={2}>{lang.t('pages_content.top_exp')}</Header>
            {Array(6).fill().map((x,i) => 
              <Cell
              className={styles['statistics-player_cell']}
              position={i}
              description='aads'
              after={<Header ml={1}>1212 JETS</Header>}>
                hjdhda uyhahujasd
              </Cell>
            )}
          </Box>
        </SignBase>
      </Paragraph>
    </div>
  )
}
Home.Layout = RLayout;
export default Home;