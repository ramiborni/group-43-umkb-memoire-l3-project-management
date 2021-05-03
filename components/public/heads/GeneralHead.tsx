import Head from 'next/head'
import mainTitle from '../../../configs/mainTitle';

const GeneralHead = ({title} : {
    title: string | undefined
}) => {
    

    return (
        <div>
            <Head>
                <title>{
                    (title!=='Rakm Conseil') ? title + mainTitle  : title
                }</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

        </div>
    );
}
GeneralHead.defaultProps = {
    title: 'Rakm Conseil'
}
export default GeneralHead;
