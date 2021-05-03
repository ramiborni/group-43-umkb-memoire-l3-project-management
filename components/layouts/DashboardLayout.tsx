import { SearchIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import dashboardLayoutStyles from "../../styles/components/DashboardLayout.module.css"
import GeneralHead from "../public/heads/GeneralHead";
import DashboardNavbar from "../specified/dashboard/layout/DashboardNavbar";
import DashboardSideBar from "../specified/dashboard/layout/DashboardSideBar";

const DashboardLayout = ({children}:{children:ReactNode}) => {
    const router= useRouter()
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const [isMobile,setIsMobile] = useState<boolean>(false)
    const {t} = useTranslation('dashboard')
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          // Handler to call on window resize
          const handleResize = () => {
            if(window.innerWidth>=1024){
               setOpenDrawer(true)     
               setIsMobile(false)

            }else{
              setIsMobile(true)
            }        
          }
        
          window.addEventListener("resize", handleResize);
         
          handleResize();
        
        }})


    return (
       <>
       <GeneralHead title={t('dashboard')}></GeneralHead>
       <motion.div className={( openDrawer && isMobile ? 'overflow-hidden':'')+" flex h-screen bg-gray-50 dark:bg-gray-900"} initial="hidden" animate="visible" variants={{
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
                <DashboardSideBar drawer={openDrawer}></DashboardSideBar>
                <div className={(!openDrawer && isMobile ? 'opacity-0 z-20' : 'z-10') + " lg:hidden fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"}></div>
                <div className="flex flex-1 flex-col">
                  <DashboardNavbar locale={router.locale=="en" ? "fr" : "en"} drawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
                  <main className={!openDrawer ?"z-20":"z-0"}>
                  {children}
                  </main>
        
                
            </div>
        </motion.div>
       </>
       
    );
}

export default DashboardLayout;