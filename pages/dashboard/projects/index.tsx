import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
import {Button, Col, Row, Tag} from "rsuite";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import InfoCard from "../../../components/public/InfoCard";
import OverViewCard from "../../../components/specified/dashboard/projects/index/OverViewCard";
import UtilStyle from '../../../styles/Utilities.module.css'


const index = () => {
    const {t} = useTranslation('dashboard');
    const inProgressProjects = [{
            title: 'Gestion de projet 2.0',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at maxime eligendi asperiores in facere ea, corrupti ad consectetur dolorum placeat. Quia, natus eligendi ipsum voluptates voluptatum labore aperiam exercitationem.',
            fields: ['IT', 'Economie']
        }];
    const finishedProjects = [{
            title: 'Gestion de projet 1.0',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur at maxime eligendi asperiores in facere ea, corrupti ad consectetur dolorum placeat. Quia, natus eligendi ipsum voluptates voluptatum labore aperiam exercitationem.',
            fields: ['Marketing']
        }]

    return (
        <DashboardLayout>
            <h4>Overview</h4>
            <Row>
                <Col xs={24}
                    md={8}
                    lg={6}
                    className={
                        UtilStyle['has-padding-25']
                }>
                    <OverViewCard num={inProgressProjects.length} title="Current Projects" color="primary"/>
                </Col>
                <Col xs={24}
                    md={8}
                    lg={6}
                    className={
                        UtilStyle['has-padding-25']
                }>
                    <OverViewCard num={finishedProjects.length} title="Completed Projects" color="success"/>
                </Col>
                <Col xs={24}
                    md={8}
                    lg={6}
                    className={
                        UtilStyle['has-padding-25']
                }>
                    <OverViewCard num={2} title="Clients" color="info"/>
                </Col>
            </Row>
            
        </DashboardLayout>
    );

}
export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})
export default index;
