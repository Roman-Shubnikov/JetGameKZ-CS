import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import {
  Caption,
  Header,
  Header2,
  Paragraph,
  RLayout, SignBase
} from '../components';
import { lang } from '../providers';
import styles from './login.module.css'


const Card = ({icon, head, descr, enter_link}) => {
    return(
        <SignBase className={styles.card}>
                <Box display='flex' flexDirection='column' mr={10}>
                    <Box display='flex' alignItems='center' mb={2}>
                        {icon}
                        <Header2 ml={1}>{head}</Header2>
                    </Box>
                    <Caption className='description'>
                        {descr}
                    </Caption>
                </Box>
                <Box>
                    <Link href={enter_link} passHref>
                        <Button size='large' variant='contained' sx={{width:200}}>
                            {lang.t('repeated.enter')}
                        </Button>
                    </Link>
                    
                </Box>
                
            </SignBase>
    )
}


const Login = () => {
  return (
    <div className={styles.root}>
        <div className={styles.content}>
            <Header mb={4} color={'var(--red)'}>
                {lang.t('page_names.login')}
            </Header>
            <Card
            head={lang.t('pages_content.steam')}
            descr={lang.t('pages_content.steam_description')}
            icon={<img src='/assets/steam.svg' alt='steam' />}
            enter_link={'/api/auth/login'} />
            <Card
            head={lang.t('pages_content.vk')}
            descr={lang.t('pages_content.vk_description')}
            icon={<img src='/assets/vk.svg' alt='vk' />}
            enter_link={'/'} />
        </div>
        
    </div>
  )
}

Login.Layout = RLayout;
export default Login;