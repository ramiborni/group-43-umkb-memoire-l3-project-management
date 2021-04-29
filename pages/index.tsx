
import React from 'react'
import LoginLayout from '../components/layouts/LoginLayout'
import styles from '../styles/Home.module.css'


/**
 * CREATED By Borni Ahmed Rami ( borniahmedrami@gmail.com / github : @rikiraspoutine ) in 04/29/2021 
 * TESTED IN Fedora 33
 * THIS PAGE CAN BE CALLED ALSO AN LOGIN PAGE
 * TODO: ADD login.tsx to redirect to index.tsx
 */

export default function Home() {
    return (
        <LoginLayout child={
          <div></div>
        }/>
    )
}
