import '../styles/globals.css'
import {appWithTranslation} from 'next-i18next'
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import theme from '../theme/themeOfficial'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    React.useEffect(() => { // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
        <Head>
            <title>My page</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
        </React.Fragment>
    );
}

export default appWithTranslation(MyApp)
