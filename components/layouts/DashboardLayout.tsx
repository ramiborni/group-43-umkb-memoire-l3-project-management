import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import { Container, Content, Footer, Header, Sidebar } from "rsuite";
import GeneralHead from "../public/heads/GeneralHead";
import DashboardNavbar from "../specified/dashboard/layout/DashboardNavbar";
import DashboardSideBar from "../specified/dashboard/layout/DashboardSideBar";
import UtilStyle from '../../styles/Utilities.module.css'

const DashboardLayout = ({children}:{children:ReactNode}) => {
    const {t} = useTranslation('dashboard')
    const router= useRouter()
    const [expanded,setExpanded] = useState(true)
    const [isMobile,setIsMobile] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
        const handleResize = () => {
          if(window.innerWidth<1024){
            setExpanded(false)     
          }      
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
      }})


    return (
       <>
       
       <GeneralHead title={t('dashboard')}></GeneralHead>
       <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              opacity: 0
            },
            visible: {
              opacity: 1,
              transition: {
                delay: .4
              }
            },
          }}>
            <Container>
              <Sidebar             width={expanded ? 230 : 56}
            collapsible>
                <DashboardSideBar expanded={expanded}/>
              </Sidebar>
              <Container>
                 <Header   className={`${UtilStyle['has-padding-15']}`}><DashboardNavbar expanded={expanded} setExpanded={setExpanded} locale={router.locale}/></Header>
                 <Content className={`${UtilStyle['has-padding-25']}`} style={{backgroundColor:'rgb(249, 250, 251)'}}>{children}</Content>
              </Container>
            </Container>
               
        </motion.div>
       </>
       
    );
}

export default DashboardLayout;