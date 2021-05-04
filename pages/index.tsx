
import { LockClosedIcon, UserIcon } from '@heroicons/react/outline'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useContext, useEffect, useState } from 'react'
import LoginLayout from '../components/layouts/LoginLayout'
import OutlinedInputTextField from '../components/public/inputs/OutlinedInputTextField'
import PrimaryButton from '../components/public/buttons/PrimaryButton'
import styles from '../styles/Index.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LoginContext from '../context/LoginContext'
import Notiflix from "notiflix";

/**
 * CREATED By Borni Ahmed Rami ( borniahmedrami@gmail.com / github : @rikiraspoutine ) in 04/29/2021 
 * TESTED IN Fedora 33
 * THIS PAGE CAN BE CALLED ALSO AN LOGIN PAGE
 * TODO: ADD login.tsx to redirect to index.tsx
 */

export default function Home() {
    const {t} = useTranslation('login')
    const router = useRouter()
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

   

    const login = () => {
      if(!(username && password)){
        Notiflix.Notify.Failure(t('empty-form'))
      }else{
        router.push('/dashboard');
      }
      
    }
    return (
      <LoginContext.Provider value={{username,password}}>
        <LoginLayout child={
          <section className="flex max-h-full items-center justify-center">
             
            <main className="flex-none  m-2 w-11/12 md:w-2/3 lg:w-5/12 space-y-2 p-2 ">
             <div className="flex min-w-full px-5 py-3">
              
                  <Link locale={router.locale === 'en' ? 'fr' : 'en'} href="/">{t('change-locale')}</Link> 
                
              
                 
             </div>
             <section className="bg-white shadow-2xl rounded-lg py-5 px-5 lg:mx-5">
              <div className="flex flex-col space-y-8 items-center w-full justify-center  p-5">
                
                <img className="" src="logo.jpg"/>
                <h1 className="text-xl text-left font-bold">{t('welcome')} </h1>
                <div className="flex flex-col items-center space-y-5 justify-center">
                  <div role="form"  className="space-y-5 w-48 lg:w-full">
                     <OutlinedInputTextField updateText={setUsername}  type="text" placeholder={t('username')}
                        icon={<UserIcon className="h-5 w-5 text-purple-600"/>} />
                     <OutlinedInputTextField updateText={setPassword}  type="password" placeholder={t('password')}
                        icon={<LockClosedIcon className="h-5 w-5 text-purple-600"/>} />
                      <PrimaryButton click={login} text={t('login')}/>
                  </div>

                  <Link href="/reset">
                    {t('forgot_password')}
                  </Link>

                </div>
              
              </div>

               
             </section>
            </main>
            <main className="flex-1 hidden lg:block">
                 
            </main>

          </section>
        }/>
        </LoginContext.Provider>
    )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','login']),
  }
})