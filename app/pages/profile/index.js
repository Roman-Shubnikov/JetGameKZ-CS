

import {
    Caption,
    Header,
    Header2,
    Paragraph,
    RLayout, 
    SignBase,
    NestedCard,
    OnlineCircle,
  } from '../../components';
import { lang } from '../../providers';
import { Box } from '@mui/system';
import styles from './profile.module.css';
import { Avatar, Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

const ServerPreview = ({name, onlines, server_id, image, ticks, map_name}) => {
    return (
      <Box className={styles.servers_item} sx={{ background: 'url('+image+')', position: 'relative'}}>
        <div className={styles.news_card_g}></div>
        <Box className={styles.servers_item_content}>
          <Box className={styles.servers_item_texts}>
              <Caption>{name}</Caption>
              <div className={styles.card_caption}>
                  {lang.t('repeated.online')}: {onlines} • ТИКРЕЙТ: {ticks} • КАРТА: {map_name}
              </div>
          </Box>
          <Button 
          variant='contained'
          className={styles.servers_item_button} onClick={() => {console.log(server_id)}}>
              {lang.t('repeated.view')}
            </Button>
        </Box>
        
      </Box>
    )
  }

const Profile = props => {
    return (
        <div>
            <Paragraph
            head={<>
            <Header color={'var(--red)'}>
                {lang.t('page_names.profile')}
            </Header></>}>
                <SignBase className={styles['root']}>
                    <div className={styles['heading']}>
                        <div className={styles['heading_avatar_root']}>
                            <Avatar sx={{width: 133, height: 133}} />
                            <div className={styles['heading_avatar_caption']}>
                                admin
                            </div>
                        </div>
                        <div className={styles['heading_body']}>
                            <div className={styles['heading_body_title']}>
                                HAMYCH {<OnlineCircle sx={{ml: 1}} />}
                            </div>
                            <div className={styles['heading_body_caption']}>
                                {9842} jets
                            </div>
                        </div>
                    </div>
                    <Box ml={10} mr={10}>
                        <Paragraph
                        head={<>
                        <Header2>
                            {lang.t('pages_content.now_playing')}
                        </Header2>
                        </>}>
                        <Box className={styles['server_box']}>
                            <ServerPreview
                            name='Что-нибудь тестовое :D'
                            map_name='Dust'
                            ticks={128}
                            image={'/assets/test.png'}>
                            </ServerPreview>
                        </Box>
                        </Paragraph>
                    </Box>
                </SignBase>
            </Paragraph>
        </div>
    )
}

Profile.Layout = RLayout;
export default Profile;