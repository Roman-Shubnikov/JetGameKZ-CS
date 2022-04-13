import {
    Caption,
    FeedbackCell,
    Header,
    Header2,
    Paragraph,
    RLayout, 
    SignBase,
    NestedCard,
  } from '../../components';
import { lang } from '../../providers';
import { Box } from '@mui/system';
import styles from './pay.module.css';
import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

const PayForm = props => {
  const [promocode, setPromocode] = useState('');
  const [period, setPeriod] = useState('');
  return (
    <div>
      <Paragraph
        head={<>
          <Header color={'var(--red)'}>
            {lang.t('page_names.pay')}
          </Header>
          <Caption mt={1.5} mb={4}>
            {lang.t('page_names.pay_descr')}
          </Caption></>}>
            <SignBase className={styles.promo_sign}>
              <Box className={styles['nested_info_column']}>
                <NestedCard color='var(--red)' className={styles['nested_info-card_plan']}>
                  <Box className={styles['nested_info-card_plan_column']}>
                    <Caption>
                      {lang.t('repeated.subscription')}
                    </Caption>
                    <Header style={{fontSize: 64, lineHeight: 1}}>
                      ECO
                    </Header>
                  </Box>
                  <Box className={styles['nested_info-card_plan_column']}>
                    <Header style={{fontSize: 64, lineHeight: '50px', marginBottom: 6}}>
                      ECO
                    </Header>
                    <Caption>
                      {lang.t('repeated.subscription')}
                    </Caption>
                  </Box>
                </NestedCard>
                <FormControl fullWidth
                sx={{
                  '& .MuiInputBase-root': 
                  { mt: 2, 
                    backgroundColor: 'var(--inputs_light)', borderRadius:3,
                    color: 'var(--inputs_light_text)'
                  },
                }}
                autoComplete="off">
                  <Select
                  color='whiteeeeq'
                  value={period}
                  onChange={e => setPeriod(e.target.value)}
                  label={lang.t('placeholders.period')}>
                    <MenuItem value={1}>1 месяц</MenuItem>
                    <MenuItem value={3}>3 месяца</MenuItem>
                    <MenuItem value={12}>1 год</MenuItem>
                  </Select>
                  <TextField variant='outlined'
                  color='whiteeeeq'
                  value={promocode}
                  onChange={e => setPromocode(e.target.value)}
                  placeholder={lang.t('placeholders.promocode')}>

                  </TextField>
                  <Button
                  sx={{mt: 2}}
                  variant='contained'
                   onClick={() => {console.log(123)}}>
                    {lang.t('repeated.purchase')}
                  </Button>
                </FormControl>
              </Box>
              <Box className={styles['nested_info_column']}>
                <NestedCard color='var(--nested_card_background)' className={styles['nested_info-card_plan']}>
                  <Box className={styles['nested_info-card_plan_column']}>
                    <Caption>
                      {lang.t('repeated.your')}
                    </Caption>
                    <Header style={{fontSize: 64, lineHeight: 1}}>
                      {lang.t('repeated.balance')}
                    </Header>
                  </Box>
                  <Box className={styles['nested_info-card_plan_column']}>
                    <Header style={{fontSize: 64, lineHeight: '50px', marginBottom: 6}}>
                      123
                    </Header>
                    <Caption>
                      money
                    </Caption>
                  </Box>
                </NestedCard>
                <NestedCard color='var(--nested_card_background)' className={styles['nested_info-card_info']}>
                  <Header2 color='var(--text_description)'>
                  {lang.t('pages_content.pay_info')}
                  </Header2>
                </NestedCard>
              </Box>
            </SignBase>
      </Paragraph>
    </div>

  )
}
PayForm.Layout = RLayout;
export default PayForm;