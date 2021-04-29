import React, { ReactNode } from "react"
import GeneralHead from "../public/heads/GeneralHead"

const LoginLayout = ({child} : {child:ReactNode}) => {
    return (
        <>
        <GeneralHead title="Login"></GeneralHead>
        <main>
            {child}
        </main>
        </>
    )
}

export default LoginLayout
