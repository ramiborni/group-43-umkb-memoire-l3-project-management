import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React, {useState} from "react";
import {
    Button,
    Col,
    Dropdown,
    Grid,
    Icon,
    IconButton,
    Nav,
    Row,
    SelectPicker,
    Tag
} from "rsuite";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import InfoCard from "../../../components/public/InfoCard";
import OverViewCard from "../../../components/specified/dashboard/projects/index/OverViewCard";
import UtilStyle from '../../../styles/Utilities.module.css'


const index = () => {
    const {t} = useTranslation('dashboard');
    const projects = [
        {
            title: 'Gestion de projet 1.0',
            deadline : '12/06/2021',
            fields: ['Marketing']
        },
        {
            title: 'Gestion de projet 2.0',
            deadline : '29/07/2021',
            fields: ['IT', 'Economie']
        }, 
    ]
    const porjectStateList = [
        {
            "label": "All",
            "value": "all"
        },
        {
            "label": "Active",
            "value": "active"
        },
        {
            "label": "Finished",
            "value": "finished"
        },
        {
            "label": "Paused",
            "value": "paused"
        }, {
            "label": "Stopped",
            "value": "stopped"
        }
    ]
    const filterList = [
        {
            "label": "Sorted By Deadline",
            "value": "deadline"
        }, {
            "label": "Sorted By Creation Date",
            "value": "creation"
        }
    ]


    const [activeTab, setActiveTab] = useState("projects")
    const handleSelect = (activeKey) => setActiveTab(activeKey);

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
                    <OverViewCard num={8}
                        title="Current Projects"
                        color="primary"/>
                </Col>
                <Col xs={24}
                    md={8}
                    lg={6}
                    className={
                        UtilStyle['has-padding-25']
                }>
                    <OverViewCard num={4}
                        title="Completed Projects"
                        color="success"/>
                </Col>
                <Col xs={24}
                    md={8}
                    lg={6}
                    className={
                        UtilStyle['has-padding-25']
                }>
                    <OverViewCard num={2}
                        title="Clients"
                        color="info"/>
                </Col>
            </Row>
            <br/>
            <Nav activeKey={activeTab}
                onSelect={handleSelect}
                appearance="subtle">
                <Nav.Item eventKey="projects">
                    <h4>Projects</h4>
                </Nav.Item>
                <Nav.Item eventKey="clients">
                    <h4>Clients</h4>

                </Nav.Item>
            </Nav>
            <br/>
            <Grid fluid>

            <Row>
                
                <Col xs={8}
                    md={2}
                    lg={2}>
                    <SelectPicker data={porjectStateList}
                        searchable={false}
                        cleanable={false}
                        defaultValue="all"/>
                </Col>
                <Col xs={8}
                    md={14}
                    lg={6}>
                    <SelectPicker data={filterList}
                        searchable={false}
                        cleanable={false}
                        defaultValue="deadline"/>
                </Col>
                <Col xs={24} md={8} lgOffset={12}
                    lg={4}
                    className={
                        `${UtilStyle['justify-end']} ${UtilStyle['align-end']}} ${UtilStyle['has-padding-top-25-mobile']}`
                }>
                    <Button block appearance="primary">ADD PROJECT</Button>
                </Col>
            </Row>
            </Grid>
            <br/>
            <Grid fluid>

            <Row> {
                projects.map((p, index) => <Col key={index}
                    xs={24}
                    md={12}
                    lg={6}
                    className={
                        UtilStyle['has-padding-15']
                }>
                    <InfoCard>
                        <Row>
                            <Col xs={20}>
                                {
                                <h5>{p.title}</h5>
                            }</Col>
                            <Col xs={4}>
                                <Dropdown style={
                                        {marginTop: '-5.9px'}
                                    }
                                    renderTitle={
                                        () => {
                                            return <IconButton size="lg" appearance="subtle"
                                                icon={
                                                    <Icon
                                                size="5x"
                                                icon="ellipsis-v"></Icon>
                                                }
                                                circle/>;
                                        }
                                }>
                                    <Dropdown.Item>
                                        <Icon icon="detail"/>
                                        Show More Details
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Icon icon="list-ul"/>
                                        Show Tasks
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Icon icon="user"/>
                                        Show Client
                                    </Dropdown.Item>
                                </Dropdown>
                            </Col>
                        </Row>
                        <br/>
                        <span className={UtilStyle.infoDarkText}> Deadline : <strong>{p.deadline}</strong></span>


                    </InfoCard>
                </Col>)
            } </Row>
            </Grid>

        </DashboardLayout>
    );

}
export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})
export default index;
