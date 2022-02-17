import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { RLayout } from '../components';
import { lang } from '../providers';
import styles from './404.module.css'
import Link from 'next/link'
const Error404 = () => {
    return (
      <div className={styles.root}>
        <h1 className={styles.red}>404</h1>
        <Box sx={{fontSize: 20, textAlign: 'center', mb: 10}}>{lang.t('nav.404')}</Box>
        <Link href='/' passHref>
            <Button size='large' variant='contained'>
                {lang.t('nav.main')}
            </Button>
        </Link>
        
        <div></div>
      </div>
    )
}
Error404.Layout = RLayout;
export default Error404;