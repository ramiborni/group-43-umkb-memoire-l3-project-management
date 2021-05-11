import '../styles/globals.css'
import {appWithTranslation} from 'next-i18next'
import 'rsuite/lib/styles/index.less';

function MyApp({Component, pageProps}) {
    return <Component  {...pageProps} />
}

export default appWithTranslation(MyApp)
