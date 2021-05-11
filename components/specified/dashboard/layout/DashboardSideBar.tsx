import {HomeIcon} from '@heroicons/react/outline';
import React, {useEffect, useState} from 'react';
import {Dropdown, Icon, Nav, Sidenav} from 'rsuite';
import User from '../../../../models/User';
import UserCardHorizontal from '../layout/UserCardHorizantal'
import ListSideBarNavigationItems from './ListSideBarNavigationItems';
import UtilStyle from '../../../../styles/Utilities.module.css'

const DashboardSideBar = ({expanded} : {
    expanded: boolean
}) => {


    return (
        <>
            <Sidenav expanded={expanded}
                appearance='subtle'
                style={
                    {height: '100%'}
                }
                defaultOpenKeys={
                    ['3', '4']
                }
                activeKey="1">
                <Sidenav.Body>
                    <img height="25"
                        className={
                            (!expanded ? '' : UtilStyle.hide) + ` ${
                                UtilStyle.imageCenter
                            } ${
                                UtilStyle['has-margin-top-20']
                            } ${
                                UtilStyle['has-margin-bottom-20']
                            }`
                        }
                        src="/logo-non-expanded.jpg"/>

                    <img height="50"
                        className={
                            (expanded ? '' : UtilStyle.hide) + ` ${
                                UtilStyle.imageCenter
                            } ${
                                UtilStyle['has-margin-top-20']
                            } ${
                                UtilStyle['has-margin-bottom-20']
                            }`
                        }
                        src="/logo.jpg"/>
                    <Nav>
                        <Nav.Item eventKey="1"
                            icon={
                                <Icon
                            icon="dashboard"/>
                        }>
                            Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="2"
                            icon={
                                <Icon
                            icon="project"/>
                        }>
                            Projects
                        </Nav.Item>
                        <Nav.Item eventKey="2"
                            icon={
                                <Icon
                            icon="task"/>
                        }>
                            Tasks
                        </Nav.Item>
                        <Nav.Item eventKey="2"
                            icon={
                                <Icon
                            icon="envelope-o"/>
                        }>
                            Requests
                        </Nav.Item>
                        <Nav.Item eventKey="2"
                            icon={
                                <Icon
                            icon="calendar"/>
                        }>
                            Calendar
                        </Nav.Item>
                        <Nav.Item eventKey="2"
                            icon={
                                <Icon
                            icon="charts"/>
                        }>
                            Reports
                        </Nav.Item>

                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </>
    );
}

export default DashboardSideBar;
