import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";

import UtilStyle from '../../styles/Utilities.module.css'
import WelcomeUser from "../../components/specified/dashboard/index/WelcomeUser";
import ProjectDashboardCard from "../../components/specified/dashboard/index/ProjectDashboardCard";
import {
    Avatar,
    Chip,
    Grid,
    IconButton,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    NoSsr,
    Paper,
    Typography
} from "@material-ui/core";
import FolderIcon from '@material-ui/icons/Folder';
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
const localizer = momentLocalizer(moment)
import { useRecoilState, useRecoilValue } from 'recoil'
import {userState, projectState} from './../../state'

const index = () => {

    const {t} = useTranslation('dashboard');

    const events = [{
            start: moment().toDate(),
            end: moment().add(4, "days").toDate(),
            title: "Presentation"
        }];



    const user= useRecoilValue(userState)
    const projects = useRecoilValue(projectState)

    return (
        <DashboardLayout>
            <div className="h-5"></div>
            <WelcomeUser user={user}/>
            <Grid container className="mt-10">
                <Grid item
                    xs={12}
                    md={6}
                    lg={4}
                    className="space-y-5 p-2">
                    <Paper elevation={0}
                        className="p-4 rounded-xl space-y-5 shadow-sm">
                        <Typography variant="h5">Projects</Typography>
                        <List> {
                            projects.map((project, i) => <ListItem className="rounded-xl" button
                                key={i}>
                                <ListItemIcon>
                                    <Avatar color="primary">
                                        <BusinessCenterRoundedIcon className="text-white"/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText primary={
                                        project.name
                                    }
                                    secondary={
                                        project.module.moduleName
                                    }/>

                            </ListItem>)
                        } </List>

                    </Paper>
                    <ProjectDashboardCard project={projects[0]}/>

                </Grid>
                <Grid item
                    xs={12}
                    md={6}
                    lg={4}
                    className="space-y-5 p-2">
                    <ProjectDashboardCard project={projects[1]}/>

                    <ProjectDashboardCard project={projects[2]}/>


                </Grid>
                <Grid item
                    xs={12}
                    lg={4}
                    className="space-y-5 p-2">

                    <Paper elevation={0}
                        className="p-4 rounded-xl space-y-5 shadow-sm">
                        <Typography variant="h5">Planned Events</Typography>

                        <Calendar min={
                                moment().toDate()
                            }
                            views={
                                ['month']
                            }
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={
                                {height: 475}
                            }/>
                    </Paper>
                </Grid>
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
