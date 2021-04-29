import React, {ReactNode} from "react"
import GeneralHead from "../public/heads/GeneralHead"
import LoginStyles from "../../styles/components/LoginLayout.module.css"
import {useTranslation} from "next-i18next"
import {Button} from "@material-ui/core"
import {GetStaticProps} from "next"
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"

const LoginLayout = ({child} : {
    child: ReactNode
}) => {
    const router = useRouter()

    const {t} = useTranslation('common')
    return (
        <>
            <GeneralHead title={
                t('login')
            }></GeneralHead>
            <main>
                <Link href='/' locale={router.locale === 'en' ? 'fr' : 'en'}>
                    <Button> {
                        t('change-locale')
                    } </Button>
                </Link>
                {child} </main>
        </>
    )
}

export default LoginLayout
