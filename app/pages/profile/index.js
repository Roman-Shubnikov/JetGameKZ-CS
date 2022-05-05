

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

const Profile = props => {
    return (
        <div>
            <Paragraph
            head={<>
            <Header color={'var(--red)'}>
                {lang.t('page_names.profile')}
            </Header></>}>
                <SignBase>
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

                </SignBase>
            </Paragraph>
        </div>
    )
}

Profile.Layout = RLayout;
export default Profile;