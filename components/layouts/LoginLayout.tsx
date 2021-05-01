import React, {ReactNode} from "react"
import GeneralHead from "../public/heads/GeneralHead"
import LoginStyles from "../../styles/components/LoginLayout.module.css"
import {useTranslation} from "next-i18next"
import {GetStaticProps} from "next"
import Link from 'next/link'
import {useRouter} from "next/dist/client/router"

const LoginLayout = ({child} : {
    child: ReactNode
}) => {

    const {t} = useTranslation('common')
    return (
        <>
        <main className={LoginStyles.root}>
              {child}    
        </main>
        </>
    )
}

export default LoginLayout
