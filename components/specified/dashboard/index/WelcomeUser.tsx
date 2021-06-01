import React, { ReactNode } from "react";
import InfoCard from "../../../public/InfoCard";
import UtilStyle from '../../../../styles/Utilities.module.css'
import { useTranslation } from "next-i18next";
import { Typography } from "@material-ui/core";

const WelcomeUser = () => {
    
    const {t} = useTranslation('dashboard');

    return (

       <div>
           <Typography variant="h4" >
             Rakm Conseil Dashboard
           </Typography>
           <Typography variant="subtitle1" >
             {t('welcome')} Borni Ahmed Rami
           </Typography>
       </div>
    );
}

export default WelcomeUser;
