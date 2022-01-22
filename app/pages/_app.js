
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie'
import { Provider, useDispatch, useSelector } from "react-redux";

import '../styles/global.css'
import {theme_light, theme_dark} from '../src/theme';
import {store} from '../store';
import { accountActions } from '../store/main';
const Noop = ({ children }) => <>{children}</>
const App = ({ Component, pageProps }) => {
    const Layout = Component.Layout || Noop;
    const dispatch = useDispatch();
    const [theme, setTheme] = useState('light')
    const { scheme } = useSelector(state => state.account);
    const init = useRef(false);
    const setScheme = useCallback((data) => dispatch(accountActions.setScheme(data)), [dispatch]);
    useEffect(() => {
        if(!init.current) return;
        const schemeAttribute = document.createAttribute('scheme');
		
        let cookie_sch = Cookies.get('scheme');
        if(scheme !== cookie_sch) {
            Cookies.set('scheme', scheme, { expires: 300 });
            cookie_sch = scheme
        }
        schemeAttribute.value = cookie_sch
        setTheme(cookie_sch)
        document.body.attributes.setNamedItem(schemeAttribute);
        
    }, [scheme])

    useEffect(() => {
        const schemeAttribute = document.createAttribute('scheme');
				
        let cookie_sch = Cookies.get('scheme');
        if(!cookie_sch) {
            Cookies.set('scheme', 'light', { expires: 300 });
            cookie_sch = 'light'
        }
        schemeAttribute.value = cookie_sch
        setTheme(cookie_sch)
        setScheme(cookie_sch)
        init.current = true
        document.body.attributes.setNamedItem(schemeAttribute);
    }, [])
    return(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>Jet Gaming</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <ThemeProvider theme={theme === 'light' ? theme_light : theme_dark}>
            <CssBaseline />
            <Layout pageProps={{...pageProps}}>
                <Component {...pageProps} />
            </Layout>
            </ThemeProvider>
        </>
    ) 
}

const ReduxApp = (props) => (
<Provider store={store}>
    <App {...props} />
</Provider>
)
export default ReduxApp;
