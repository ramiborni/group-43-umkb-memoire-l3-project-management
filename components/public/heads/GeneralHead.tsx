import Head from 'next/head'
import mainTitle from '../../../configs/mainTitle';

const GeneralHead = ({title} : {
    title: string | undefined
}) => {
    console.log(title)
    return (
        <div>
            <Head>
                <title>{
                    (title!=='Rakm Conseil') ? mainTitle + title : title
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
