
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie'
import { Provider, useDispatch, useSelector } from "react-redux";

import { theme_light, theme_dark } from '../src/theme';
import { store } from '../store';
import { accountActions } from '../store/main';

import { StylesProvider, createGenerateClassName } from '@mui/styles';

import SwiperCore, {
    FreeMode, Pagination, Navigation
} from 'swiper';


import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"

import '../styles/global.css'
import { lang } from '../providers'

SwiperCore.use([FreeMode, Pagination, Navigation]);


const generateClassName = createGenerateClassName({
    productionPrefix: 'c',
});
const Noop = ({ children }) => <>{children}</>
const App = ({ Component, pageProps }) => {
    const router = useRouter();
    const Layout = Component.Layout || Noop;
    const dispatch = useDispatch();
    const [theme, setTheme] = useState('light')
    const { scheme, language } = useSelector(state => state.account);
    const init = useRef(false);
    const setScheme = useCallback((data) => dispatch(accountActions.setScheme(data)), [dispatch]);
    const setLanguage = useCallback((data) => dispatch(accountActions.setLanguage(data)), [dispatch]);
    
    useEffect(() => {
        if (!init.current) return;
        const schemeAttribute = document.createAttribute('scheme');

        let cookie_sch = Cookies.get('scheme');
        if (scheme !== cookie_sch) {
            Cookies.set('scheme', scheme, { expires: 300 });
            cookie_sch = scheme
        }
        schemeAttribute.value = cookie_sch
        setTheme(cookie_sch)
        document.body.attributes.setNamedItem(schemeAttribute);

    }, [scheme])

    useEffect(() => {
        let language_cookie = Cookies.get('language');
        if (language !== language_cookie && init.current) {
            Cookies.set('language', language, { expires: 300 });
            language_cookie = language;
            router.reload();
        }
        lang.changeLanguage(language_cookie)
        setLanguage(language_cookie);
        
    }, [language])

    useEffect(() => {
        const schemeAttribute = document.createAttribute('scheme');

        let cookie_sch = Cookies.get('scheme');
        if (!cookie_sch) {
            Cookies.set('scheme', 'light', { expires: 300 });
            cookie_sch = 'light'
        }
        schemeAttribute.value = cookie_sch
        setTheme(cookie_sch)
        setScheme(cookie_sch)
        setTimeout(() => init.current = true, 400);
        
        document.body.attributes.setNamedItem(schemeAttribute);
    }, [])
    return (
        <StylesProvider generateClassName={generateClassName}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Jet Gaming</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <ThemeProvider theme={theme === 'light' ? theme_light : theme_dark}>
                <CssBaseline />
                <Layout pageProps={{ ...pageProps }}>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </StylesProvider >
    )
}

const ReduxApp = (props) => (
    <Provider store={store}>
        <App {...props} />
    </Provider>
)
export default ReduxApp;
