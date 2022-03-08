import {
    Caption,
    FeedbackCell,
    Header,
    Header2,
    Paragraph,
    RLayout, 
    SignBase,
    NestedCard,
  } from '../components';
import { lang } from '../providers';
import { Box } from '@mui/system';
import styles from './pay.module.css';

const PayForm = props => {
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
              <Box>
                <NestedCard color='var(--red)'>
                  <Header>opsdjsjfodp</Header>
                  <Header>opsdjsjfodp</Header>
                </NestedCard>
              </Box>
              <Box>

              </Box>
            </SignBase>
      </Paragraph>
    </div>

  )
}
PayForm.Layout = RLayout;
export default PayForm;