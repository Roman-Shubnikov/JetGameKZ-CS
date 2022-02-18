import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
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

const ServerPreview = ({name, onlines, server_id, image, fire}) => {
  return (
    <Box className={styles.servers_item} sx={{ background: 'url('+image+')', position: 'relative'}}>
      <div className={styles.news_card_g}></div>
      <Box className={styles.servers_item_content}>
        <Box className={styles.servers_item_texts}>
            <Header>{name}</Header>
            <Caption>{lang.t('repeated.online')}: {onlines} {lang.t('repeated.online_servers')}</Caption>
        </Box>
        <Button 
        variant='contained'
        className={styles.servers_item_button} onClick={() => {console.log(server_id)}}>
            {lang.t('repeated.view')}
          </Button>
      </Box>
      
      {fire && <Box sx={{backgroundColor: "var(--red)", position: 'absolute', right: 20, top: 20, padding: '8px 10px', borderRadius: 2}}>
          <img src='/assets/fire.svg' alt='fire' />
        </Box>}
    </Box>
  )
}

const Home = () => {
  const [news, setNews] = useState(null);
  const [tops, setTops] = useState(null);
  useEffect(() => {
    let mount = true;
    fetch(`${API_URL}/news`)
    .then(res => res.json())
    .then(news => {
      if(!mount) return;
      setNews(news);
    })
    return () => mount = false;
  }, [lang.locale])
  useEffect(() => {
    let mount = true;
    fetch(`${API_URL}/tops`)
    .then(res => res.json())
    .then(news => {
      if(!mount) return;
      setTops(news);
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
        <Box className={styles.servers_box}>
          {Array(9).fill().map((_,i) => 
          <ServerPreview
          key={i}
          name={'klsakas'}
          onlines={5}
          server_id={1}
          image={'/assets/test.png'}
          fire />)}
        </Box>
        
      </Paragraph>
      <Paragraph
      head={<Header>{lang.t('repeated.statistics_player')}</Header>}>
        <SignBase className={styles['statistics-player']}
        sx={{flexDirection: {xs: 'column', lg: 'row'}}}>
          <Box className={styles['statistics-player_rank']}>
            <Header mb={4} mt={2}>{lang.t('pages_content.top_rank')}</Header>
            {tops && tops.top_rank.map((x,i) => 
              <Cell
              key={x.steam_id}
              className={styles['statistics-player_cell']}
              position={i +1}
              description={'КД: ' + x.kd}
              after={<img style={{marginLeft: 15}} src={`/assets/rank_icons/${x.rank}.png`} alt='rank' />}>
                {tops.users[x.steam_id].name}
              </Cell>
            )}
          </Box>
          <Box className={styles['statistics-player_sep']}
          sx={{display: {xs: 'none', lg: 'block'}}}></Box>
          <Box className={styles['statistics-player_rank']}>
            <Header mb={4} mt={2}>{lang.t('pages_content.top_exp')}</Header>
              {tops && tops.top_value.map((x,i) => 
              <Cell
              key={x.steam_id}
              className={styles['statistics-player_cell']}
              position={i +1}
              after={<Header ml={1}>{x.value} JETS</Header>}>
                {tops.users[x.steam_id].name}
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