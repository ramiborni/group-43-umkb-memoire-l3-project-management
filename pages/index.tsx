import {LockClosedIcon, UserIcon} from '@heroicons/react/outline'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React, {useContext, useEffect, useState} from 'react'
import LoginLayout from '../components/layouts/LoginLayout'
import OutlinedInputTextField from '../components/public/inputs/OutlinedInputTextField'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LoginContext from '../context/LoginContext'
import Notiflix from "notiflix";
import {Button, Col, Container, Input, InputGroup, Row} from "rsuite";
import PrimaryButton from '../components/public/buttons/PrimaryButton'
import UtilStyle from '../styles/Utilities.module.css'
import Card from '../components/public/InfoCard'
/**
 * CREATED By Borni Ahmed Rami ( borniahmedrami@gmail.com / github : @rikiraspoutine ) in 04/29/2021 
 * TESTED IN Fedora 33
 * THIS PAGE CAN BE CALLED ALSO AN LOGIN PAGE
 * TODO: ADD login.tsx to redirect to index.tsx
 */

export default function Home() {
    const {t} = useTranslation('login')
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = () => {
        if (!(username && password)) {
            Notiflix.Notify.Failure(t('empty-form'))
        } else {
            router.push('/dashboard');
        }

    }
    return (
        <LoginContext.Provider value={
            {username, password}
        }>
            <LoginLayout child={<Container>
                <Row className={UtilStyle['has-padding-0']}>
                <Button className={UtilStyle.transparent}><h6>{t('change-locale')}</h6></Button>
                </Row>
                <Row fluid="true"  className={UtilStyle['has-padding-25-desktop']}>
                  <Col xs={24} lg={12}>
                     <Card>
                       <Row className={`${UtilStyle['has-padding-left-50-desktop']} ${UtilStyle['has-padding-right-50-desktop']} ${UtilStyle.textCenter}`}>

                         <img height="75" className={`${UtilStyle.imageCenter} ${UtilStyle['has-margin-top-20']}`} src="/logo.jpg"/>
                         <h3 className={`${UtilStyle['has-margin-top-50']} ${UtilStyle['has-margin-bottom-20']}`} >{t('welcome')}</h3>
                         <InputGroup className={`${UtilStyle['has-padding-top-5']} ${UtilStyle['has-padding-bottom-5']} ${UtilStyle['has-margin-top-20']} ${UtilStyle['has-margin-bottom-20']}`}>
                               <Input onChange={(v) => setUsername(v)}  placeholder={t('username')} />
                               <InputGroup.Addon style={{backgroundColor:'white'}}>
                                    <UserIcon className={`${UtilStyle.h5} ${UtilStyle.w5}`}/>
                               </InputGroup.Addon>
                         </InputGroup>
                         <InputGroup className={`${UtilStyle['has-padding-top-5']} ${UtilStyle['has-padding-bottom-5']} ${UtilStyle['has-margin-top-20']} ${UtilStyle['has-margin-bottom-20']}`}>
                               <Input onChange={(v) => setPassword(v)}  placeholder={t('password')} />
                               <InputGroup.Addon style={{backgroundColor:'white'}}>
                                    <LockClosedIcon className={`${UtilStyle.h5} ${UtilStyle.w5}`}/>
                               </InputGroup.Addon>
                         </InputGroup>
                         <Button onClick={() => login()} className={`${UtilStyle['has-padding-top-10']} ${UtilStyle['has-padding-bottom-10']}`} block appearance='primary'>
                           {t('login')}
                         </Button>
                         <Link href="/reset">
                         <Button className={`${UtilStyle['has-margin-top-15']} ${UtilStyle['has-padding-top-10']} ${UtilStyle['has-padding-bottom-10']}`} >
                           {t('forgot_password')}
                         </Button>
                         
                         </Link>
                       </Row>
                     </Card>
                  </Col>
                  </Row>
                </Container>}/>
        </LoginContext.Provider>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'login'])
    }
})
