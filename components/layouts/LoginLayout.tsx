import React, {ReactNode} from "react"
import LoginStyles from "../../styles/components/LoginLayout.module.css"
import {useTranslation} from "next-i18next"
import { Container } from "@material-ui/core"
const LoginLayout = ({children:React.ReactNode}) => {

    const {t} = useTranslation('common')
    return (
        <>
        <main className={LoginStyles.root}>
             <Container className="p-5">
               {children}    
             </Container>
        </main>
        </>
    )
}

export default LoginLayout
