import {useTranslation} from "next-i18next";
import Link from "next/link";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {
    Avatar,
    Button,
    Icon,
    IconButton,
    Nav,
    Navbar,
    Row
} from "rsuite";
import UtilStyle from '../../../../styles/Utilities.module.css'

const DashboardNavbar = ({locale, expanded, setExpanded} : {
    locale: string,
    expanded: boolean,
    setExpanded: Dispatch < SetStateAction < boolean >>
}) => {
    const {t} = useTranslation('dashboard')
    const [isMobile,setIsMobile] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        const handleResize = () => {
          if(window.innerWidth<1024){
            setIsMobile(true)     
          }else{
            setIsMobile(false)       
          }
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
      }})


    return (
        <Navbar style={
            {
                backgroundColor: 'white !important',
                alignItems: 'center'
            }
        }>
            <Navbar.Header style={
                    {marginTop: '10px'}
                }
                className={
                    ( !expanded && isMobile ? UtilStyle.hide : '') + ` ${
                        UtilStyle['has-margin-right-15']
                    }`
            }>
                <IconButton onClick={
                        () => setExpanded(!expanded)
                    }
                    appearance="subtle"
                    size="lg"
                    icon={
                        <Icon
                    icon="bars"/>
                }></IconButton>
            </Navbar.Header>

            <Navbar.Header>

                <h1 style={
                    {fontSize: '1.6rem'}
                }>
                    {
                    t('dashboard')
                }</h1>

            </Navbar.Header>
            <Nav pullRight
                style={
                    {backgroundColor: 'white !important'}
            }>
                <Link href=""
                    locale={
                        locale === 'en' ? 'fr' : 'en'
                }>
                    <Nav.Item size="2x"> {
                        <strong style={{fontSize:'15px'}}>{locale.toUpperCase()}</strong>
                    } </Nav.Item>
                </Link>
                <Nav.Item icon={<Icon
                        className={
UtilStyle['has-margin-left-5']}
                    size="lg"
                    icon="bell-o"/>}></Nav.Item>
                <Nav.Item icon={<Icon
                        className={
UtilStyle['has-margin-left-5']}
                    size="lg"
                    icon="cog"/>}></Nav.Item>
                <Nav.Item icon={<Icon
                        className={
UtilStyle['has-margin-left-5']}
                    size="lg"
                    icon="user"/>}></Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default DashboardNavbar;
