import React, {ReactNode} from "react"
import LoginStyles from "../../styles/components/LoginLayout.module.css"
import {useTranslation} from "next-i18next"
import 'rsuite/lib/styles/index.less';
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
