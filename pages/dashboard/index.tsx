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


const index = () => {

    const {t} = useTranslation('dashboard');
    const files = [
        {
            "filename": "plan-B.pdf",
            "subject": "Google Pixel 4 Marketing",
            "date": "2021-01-01"
        }, {
            "filename": "plan-A.docx",
            "subject": "Google Pixel 4 Marketing",
            "date": "2021-02-01"
        }, {
            "filename": "funding-details.xlsx",
            "subject": "Hello world Project",
            "date": "2021-03-01"
        },
    ]
    const projects = [
        {
            "projectName":"Google Pixel 6 Marketing",
            "company":"Google inc"
        },
        {
            "projectName":"Hello world Project",
            "company":"Rakm Conseil"
        },
        {
            "projectName" : "Windows Next Gen",
            "company": "Microsoft inc"
        }
    ]
    const latestProject = {
        title: 'Hello world Project',
        company: 'Rakm Conseil',
        type: 'App design & developement',
        periority: 2,
        totalTasks: 50,
        progressedTasks: 32,
        deadline: '25/10/2021'
    }
    const latestImpProject = {
        title: 'Google Pixel 6 Marketing',
        company: 'Google',
        type: 'Marketing',
        periority: 1,
        totalTasks: 182,
        progressedTasks: 156,
        deadline: '13/08/2021'
    }

    const events = [{
            start: moment().toDate(),
            end: moment().add(4, "days").toDate(),
            title: "Presentation"
        }];

    return (
        <DashboardLayout>
            <div className="h-5"></div>
            <WelcomeUser/>
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
                                        project.projectName
                                    }
                                    secondary={
                                        project.company
                                    }/>

                            </ListItem>)
                        } </List>

                    </Paper>
                    <ProjectDashboardCard project={latestImpProject}/>

                </Grid>
                <Grid item
                    xs={12}
                    md={6}
                    lg={4}
                    className="space-y-5 p-2">
                    <ProjectDashboardCard project={latestProject}/>

                    <Paper elevation={0} className="p-4 rounded-xl space-y-5 shadow-sm">
                        <Typography variant="h5">Latest Files</Typography>
                        <List> {
                            files.map((file, i) => <ListItem className="rounded-xl" button
                                key={i}>
                                <ListItemIcon>
                                    <Avatar color="primary">
                                        <FolderIcon className="text-white"/>
                                    </Avatar>
                                </ListItemIcon>
                                <ListItemText primary={
                                        file.filename
                                    }
                                    secondary={
                                        file.subject
                                    }/>

                            </ListItem>)
                        } </List>
                    </Paper>

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
