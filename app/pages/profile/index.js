

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
                  {lang.t('repeated.online')}: {onlines} • {lang.t('repeated.tickreit')}: {ticks} • {lang.t('repeated.map')}: {map_name}
              </div>
          </Box>
          <Button 
          variant='contained'
          className={styles.servers_item_button} onClick={() => {console.log(server_id)}}>
              {lang.t('repeated.connect_to')}
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
                            name='Сервер 000'
                            map_name='Dust'
                            ticks={128}
                            image={'/assets/test.png'}>
                            </ServerPreview>
                        </Box>
                        </Paragraph>
                        
                        <Paragraph
                        head={<>
                        <Header2>
                            {lang.t('pages_content.prevoisly_playing')}
                        </Header2>
                        </>}>
                        <Box className={styles['server_box']}>
                            <ServerPreview
                            name='Сервер 001'
                            map_name='Sandstone'
                            ticks={128}
                            image={'/assets/test.png'}>
                            </ServerPreview>
                        
                            <ServerPreview
                            name='Сервер 002'
                            map_name='Nuke'
                            ticks={128}
                            image={'/assets/test.png'}>
                            </ServerPreview>
                        
                            <ServerPreview
                            name='Сервер 003'
                            map_name='Mirage'
                            ticks={128}
                            image={'/assets/test.png'}>
                            </ServerPreview>
                        
                            <ServerPreview
                            name='Сервер 004'
                            map_name='Sandstone'
                            ticks={128}
                            image={'/assets/test.png'}>
                            </ServerPreview>
                        </Box>
                        </Paragraph>

                        <Paragraph
                        head={<>
                        <Header2>
                            {lang.t('repeated.statistic')}
                        </Header2>
                        </>}>
                            <Box>
                                
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