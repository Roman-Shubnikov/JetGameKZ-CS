import { 
    AppBar, 
    Box, 
    Drawer, 
    Divider, 
    IconButton, 
    Toolbar, 
    InputBase
} from '@mui/material'
import Link from 'next/link'
import { styled, useTheme, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './layout.module.css'
// import cn from 'classnames'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image'
import { WellNavButton, NavButton } from '../navbutton/navbutton';
import { lang } from '../../providers';
import { useCallback, useEffect, useState } from 'react';
import { DARK, LIGHT } from '../../src/theme';
import { accountActions } from '../../store/main';
import { useSelector, useDispatch } from 'react-redux';
import { SOCIAL_MEDIA } from '../../config';
import { Caption, SignBase } from '..';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

export const RLayout = ({ children}) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [container, setContainer] = useState(undefined)
    const { scheme } = useSelector(state => state.account);
    const setScheme = useCallback((data) => dispatch(accountActions.setScheme(data)), [dispatch]);
    useEffect(() => {
        setContainer(window !== undefined ? () => document.body : undefined);
    })
    const drawer = (<>
        <DrawerHeader>
            <IconButton onClick={() => setDrawerOpen(p => !p)}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
        </DrawerHeader>
        <WellNavButton href='/' icon='/navbar/house.svg' placeholder={lang.t('nav.main')} />
        <WellNavButton href='/market' icon='/navbar/market.svg' placeholder={lang.t('nav.market')} />
        <WellNavButton href='/support' icon='/navbar/support.svg' placeholder={lang.t('nav.main')} />
        <WellNavButton href='/banlist' icon='/navbar/banlist.svg' placeholder={lang.t('nav.banlist')} />
        <WellNavButton href='/faq' icon='/navbar/faq.svg' placeholder={lang.t('nav.faq')} />
        <WellNavButton href='/profile' icon='/navbar/profile.svg' placeholder={lang.t('nav.profile')} />
        <WellNavButton href='/profile' icon='/navbar/profile.svg' placeholder={lang.t('nav.settings')} />
        <NavButton href='/profile' 
        icon={scheme === LIGHT ? '/navbar/themes/sun.svg' : '/navbar/themes/moon.svg'} 
        placeholder={lang.t('nav.settings')}
        onClick={() => {
            setScheme(scheme === LIGHT ? DARK : LIGHT)
        }} />
        </>)
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
            width: '20ch',
            },
        },
    }));
    return(
        <>
            <Box>
                <AppBar sx={{zIndex: (theme) => theme.zIndex.drawer+1, boxShadow: 'none',}} position='fixed'>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                            onClick={() => setDrawerOpen(p => !p)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ml: {xs:'calc(100% / 2 - 68px)', sm: 0}}}>
                            <img src={scheme === LIGHT ? '/logo_wt.svg' : '/logo.svg'} height={39} width={68} />
                        </Box>
                        
                        <Search sx={{display: { xs: 'none', sm: 'block' }}}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Введите ник игрока..."
                                inputProps={{ 'aria-label': 'search' }}
                                />
                        </Search>
                        <Box sx={{display: { xs: 'none', sm: 'block' }}}>
                            <IconButton href={SOCIAL_MEDIA.vk} target='_blank'>
                                <img src='/socialmedia/vk.svg' alt='vk' />
                            </IconButton>
                            <IconButton href={SOCIAL_MEDIA.telegram} target='_blank'>
                                <img src='/socialmedia/telegram.svg' alt='vk' />
                            </IconButton>
                            <IconButton href={SOCIAL_MEDIA.instagram} target='_blank'>
                                <img src='/socialmedia/instagram.svg' alt='vk' />
                            </IconButton>
                            <IconButton href={SOCIAL_MEDIA.discord} target='_blank'>
                                <img src='/socialmedia/discord.svg' alt='vk' />
                            </IconButton>
                        </Box>
                        
                    </Toolbar>
                </AppBar>
                <Drawer sx={{display: { xs: 'none', sm: 'block' },
                    '.MuiDrawer-paper': {
                        overflow: 'hidden',
                        width: 100,
                        borderRight: 'none',
                        backgroundColor: (theme) => theme.palette.primary.main
                    }}} variant='permanent'>
                    {drawer}
                </Drawer>
                <Drawer 
                container={container}
                anchor='top'
                sx={{display: { xs: 'block', sm: 'none' }, '.MuiDrawer-paper': {
                    backgroundColor: (theme) => theme.palette.primary.main
                }}} 
                variant='temporary' 
                open={drawerOpen}>
                    {drawer}
                </Drawer>
            </Box>
            <div className={styles.root} id='171837'>
                {children}
                <footer>
                    <SignBase className={styles.contacts}>
                        
                        <Box sx={{display: { xs: 'none', sm: 'flex' }}} className={styles.contacts_column} alignItems='left'>
                            <Link href='/contacts'>
                                <Caption isLink>
                                    {lang.t('repeated.contacts')}
                                </Caption>
                            </Link>
                            <Link href='/help'>
                                <Caption isLink>
                                    {lang.t('repeated.help')}
                                </Caption>
                            </Link>
                        </Box>

                        <Box sx={{display: 'flex'}} className={styles.contacts_column}>
                            <img src={scheme === LIGHT ? '/logo_wt.svg' : '/logo.svg'} height={39} width={68}
                            style={{marginBottom: 10}} />
                            <Caption>
                                {lang.t('repeated.copyright')}
                            </Caption>
                        </Box>
                        <Box sx={{display: { xs: 'none', sm: 'flex' }}} className={styles.contacts_column}>
                            <Link href='/user_accept'>
                                <Caption isLink>
                                    {lang.t('repeated.user_accept')}
                                </Caption>
                            </Link>
                            <Link href='/market'>
                                <Caption isLink>
                                    {lang.t('repeated.market')}
                                </Caption>
                            </Link>
                            
                        </Box>
                        <Box sx={{ml: 2, display: { xs: 'block', sm: 'none !important' }}} className={styles.contacts_column}>
                            <Link href='/contacts'>
                                <Caption isLink>
                                    {lang.t('repeated.contacts')}
                                </Caption>
                            </Link>
                            <Link href='/help'>
                                <Caption isLink>
                                    {lang.t('repeated.help')}
                                </Caption>
                            </Link>
                            <Link href='/user_accept'>
                                <Caption isLink>
                                    {lang.t('repeated.user_accept')}
                                </Caption>
                            </Link>
                            <Link href='/market'>
                                <Caption isLink>
                                    {lang.t('repeated.market')}
                                </Caption>
                            </Link>
                            
                        </Box>
                    </SignBase>
                </footer>
                
            </div>
        </>
    )
}