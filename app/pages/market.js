import { Button, Rating, Skeleton, TextField } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Caption,
  FeedbackCell,
  Header,
  Header2,
  Paragraph,
  RLayout, SignBase
} from '../components';
import { API_URL } from '../config';
import { lang } from '../providers';
import styles from './market.module.css'

export const getServerSideProps = async (context) => {
  let lang = context.req.cookies.language;
  let res = await fetch(`${API_URL}/market_items?reg=${lang}`);
  let products = await res.json();
  return {
    props: {
      products,
    }
  }
}

const Market = props => {
  const {products} = props;
  const { user } = useSelector(state => state.account);
  const [feedback, setFeedback] = useState(null);
  const [send_rating_value, setSendRating] = useState(0);
  const [feedback_text, setFeedbackText] = useState('');


  const sendFeedback = () => {
    fetch(`${API_URL}/feedback`, {
      method: 'POST',
      headers: {"Content-type": "application/json; charset=UTF-8"},
      body: JSON.stringify({
        'text': feedback_text,
        'rating': send_rating_value
      })
    })
    .then(res => res.json())
    .then(data => {
      setFeedbackText(lang.t('messages.reload'))
    })
    .catch(err => {})
  }

  useEffect(() => {
    if(user) {
      fetch(`${API_URL}/feedback`)
      .then(res => res.json())
      .then(feedback => {
        setFeedback(feedback);
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  }, [user])
  const getFeedback = () => {
    if(!user) return <Header>{lang.t('pages_content.auth_notif')}</Header>;
    if(!feedback) return Array(3).fill().map((skull, i) => <Skeleton key={i} width={300} height={300} className={styles.feedback_card} />);
    if(feedback.length === 0) return <Header>Отзывов нет но такого быть не может</Header>;
    return (feedback.feedback.map((val, i) => (
      <FeedbackCell
      key={val.id}
      className={styles.feedback_card}
      rating={4}
      text={val.text}>
        {val.name}
      </FeedbackCell>
      )))
  }
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
          {products.length === 0 ? 
          <div className={styles.promo_placeholder}>
            <Header>
              {lang.t('placeholders.empty_region')}
            </Header>
          </div> : products.map((val, i) => 
          <Box className={styles.card}
          key={val.id}>
            <Box sx={{position: 'relative'}}>
              <Caption>
                {lang.t('repeated.subscription')}
              </Caption>
              <h1 style={{fontSize: 64, lineHeight: 0.9, marginBottom: 40}}>
                {val.name}
              </h1>
              {val.hot && <Box sx={{backgroundColor: "#FF6161", position: 'absolute', right: 0, top: 0, padding: '8px 10px', borderRadius: 2}}>
                <img src='/assets/fire.svg' alt='fire' />
              </Box>}
            </Box>
            
            <Box mb={2}>
              {val.benefits.map((benefit, ind) => 
              <Caption
              key={benefit.id}>
                {benefit.text}
              </Caption>)}
            </Box>
            <Box mb={2}>
              <Header2>
                {val.price} {val.currency_name} /{lang.t('repeated.month')}
              </Header2>
            </Box>
            <Button size='large' variant='contained' sx={{width: '100%', color: '#000', background: '#fff'}}>
              {lang.t('repeated.purchase')}
            </Button>
          </Box>
          )}
        </SignBase>
      </Paragraph>
      <Paragraph
      head={<>
        <Header>{lang.t('repeated.feedback')}</Header>
        <Caption mt={1.5} mb={4}>
          {lang.t('pages_content.donut_feedback')}
        </Caption></>}>
          <SignBase style={{justifyContent: 'center', padding: 20}}>
          <Box className={styles.feedback_box_main}>
              <Box className={styles.feedback_box_users}>
                {getFeedback()}
              </Box>
              <Box className={styles.feedback_box_send}>
                
                <Header>{lang.t('repeated.give_feedback')}</Header>
                <Caption mt={1.5} mb={4}>
                  {lang.t('pages_content.give_feedback_descr')}
                </Caption>
                <Box className={styles.feedback_box_send_main}>
                  <TextField label={lang.t('pages_content.give_text')}
                  variant="outlined"
                  multiline
                  rows={6}
                  value={feedback_text}
                  onChange={e => setFeedbackText(e.target.value)}
                  sx={{width: '100%', borderRadius: '12px', mb: 2, 
                    '& .MuiOutlinedInput-root': 
                    { backgroundColor: 'var(--inputs_background)' }, 
                    '& .MuiInputLabel-root': {color: 'var(--text_description)'}}} />
                  <Box sx={{backgroundColor: 'var(--inputs_background)', 
                  borderRadius: '12px',
                  mb: 4,
                  padding: 2,
                  display: 'flex',
                  justifyContent: 'center'}}>
                    <Rating 
                    sx={{
                      '& .MuiRating-icon': {
                          color: '#faaf00'
                      },
                      
                    }} 
                    value={send_rating_value} 
                    onChange={(e, rating) => setSendRating(rating)} />
                  </Box>
                  <Button sx={{width: '100%'}} variant='contained'
                  onClick={sendFeedback}>
                    {lang.t('repeated.send')}
                  </Button>
                </Box>
                

                
              </Box>
            </Box>
          </SignBase>
      </Paragraph>
    </div>
  )
}
Market.Layout = RLayout;
export default Market;