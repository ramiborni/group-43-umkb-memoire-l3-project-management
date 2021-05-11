import React, { ReactNode } from "react";
import {Col, Row} from "rsuite";
import InfoCard from "../../../public/InfoCard";
import UtilStyle from '../../../../styles/Utilities.module.css'
import { useTranslation } from "next-i18next";

const WelcomeUser = () => {
    
    const {t} = useTranslation('dashboard');

    return (

        <InfoCard>
            <Row>
                <Col xs={24}
                    lg={16}>
                    <h3 className={
                        UtilStyle['has-margin-bottom-10']
                    }>
                        {
                        t('welcome') + ' '
                    }
                        <strong>Akram Mechenetel !</strong>
                    </h3>
                    <p style={
                            {fontSize: '15px'}
                        }
                        className="text-sm lg:text-md">
                        {
                        t('welcome-more')
                    } </p>
                </Col>
                <Col xs={24}
                    lg={8}>
                    <img className={
                            `${
                                UtilStyle.imageCenter
                            } ${
                                UtilStyle['has-margin-top-50-touch']
                            }`
                        }
                        height="150"
                        src="/backgrounds/welcomeUser.png"/>
                </Col>
            </Row>
        </InfoCard>
    );
}

export default WelcomeUser;
