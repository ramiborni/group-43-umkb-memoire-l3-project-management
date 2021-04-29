import Head from 'next/head'
import mainTitle from '../configs/mainTitle'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>{mainTitle + 'Home'}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            
        </div>
    )
}
