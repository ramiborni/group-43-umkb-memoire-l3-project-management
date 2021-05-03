import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import InfoCard from "../../components/specified/dashboard/index/InfoCard";

const index = () => {

    return (
       <DashboardLayout> 
         <InfoCard/>          
       </DashboardLayout>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['dashboard']),
    }
  })

export default index;