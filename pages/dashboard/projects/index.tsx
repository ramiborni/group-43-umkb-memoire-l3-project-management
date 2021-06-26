import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React, {useState} from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import OverViewCard from "../../../components/specified/dashboard/projects/index/OverViewCard";
import {InferGetStaticPropsType} from "next";
import AddIcon from '@material-ui/icons/Add';
import moment from "moment";
import ProjectCard from "../../../components/specified/dashboard/projects/index/ProjectCard";


const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {t} = useTranslation('dashboard');
    const projects = [
        {
            title: 'Hello world Project',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.',
            company: 'Rakm Conseil',
            type: 'App design & developement',
            periority: 2,
            totalTasks: 50,
            progressedTasks: 32,
            deadline: '25/10/2021',
            createdDate: '27/05/2021',
            state: 0,
            docs: 5,
            employers:3,
        }, {
            title: 'Google Pixel 6 Marketing',
            description: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.',
            company: 'Google',
            type: 'Marketing',
            periority: 1,
            totalTasks: 182,
            progressedTasks: 156,
            deadline: '13/08/2021',
            createdDate: '21/05/2021',
            state: 0,
            docs: 5,
            employers:15,
        }, {
            title: 'Google Pixel 5 Marketing',
            description: 'Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
            company: 'Google',
            type: 'Marketing',
            periority: 1,
            totalTasks: 182,
            progressedTasks: 156,
            deadline: '10/08/2020',
            createdDate: '22/01/2021',
            state: 0,
            docs: 5,
            employers:18,
        }, {
            title: 'Surface Book 5 Marketing',
            description: 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.',
            company: 'Microsoft',
            type: 'Marketing',
            periority: 1,
            totalTasks: 112,
            progressedTasks: 112,
            deadline: '13/08/2021',
            createdDate: '01/01/2021',
            state: 1,
            docs: 15,
            employers:13,
        }
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
    const [valueTab, setValueTab] = React.useState(0);
    const [valueState, setValueState] = React.useState(0);
    const handleChange = (event : React.ChangeEvent < {} >, newValue : number) => {
        setValueTab(newValue);
    };
    const handleChangeStateProject = (event : React.ChangeEvent < {} >, newValue : number) => {
        setValueState(newValue);
    };


    const Tab1 = <>
        <Grid container alignItems="center">
            <Grid item
                xs={8}
                lg={6}
                className="space-x-5">
                <FormControl style={
                        {minWidth: '180px'}
                    }
                    variant="outlined">
                    <InputLabel id="sort-project-label">Sorted</InputLabel>
                    <Select labelId="sort-project-label" id="sort-project-field-outlined"
                        value={valueState}
                        onChange={handleChangeStateProject}
                        label="Sorted">
                        <MenuItem value={0}>
                            Deadline
                        </MenuItem>
                        <MenuItem value={1}>Creation Date</MenuItem>
                    </Select>
                </FormControl>

            </Grid>
            <Grid item
                xs={4}
                lg={6}
                className="justify-end text-right">
                <Link href="/dashboard/projects/add">
                    <Button disableElevation size="large" color="primary" variant="contained">
                        <AddIcon></AddIcon>
                        &nbsp;
                                                                                                                                            ADD PROJECT
                    </Button>
                </Link>
            </Grid>

        </Grid>
        <br/>
        <br/>
        <br/>
        <Grid container justify="center"
            spacing={5}>
            <Grid item
                xs={12}
                md={6}
                lg={4}
                className="space-y-5">
                <Typography variant="h5" className="text-red-500 font-extrabold">
                    • NEW PROJECTS
                </Typography>
                { projects.filter(p => moment().diff(moment(p.createdDate, 'DD/MM/YYYY'), 'months', true) <= 1).map((p,index) => <ProjectCard key={index} project={p}/>)}
                </Grid>
            <Grid item
                xs={12}
                md={6}
                lg={4}
                className="space-y-5">
                <Typography variant="h5" className="text-yellow-500 font-extrabold">
                    • IN PROGRESS
                </Typography>
                { projects.filter(p => p.state===0).map((p,index) => <ProjectCard key={index} project={p}/>)}

            </Grid>
            <Grid item
                xs={12}
                md={6}
                lg={4}
                className="space-y-5">
                <Typography variant="h5" className="text-green-500 font-extrabold">
                    • COMPLETED
                </Typography>
                { projects.filter(p => p.state===1).map((p,index) => <ProjectCard key={index} project={p}/>)}

            </Grid>
        </Grid>

    </>

    const Tab2 = <></>

    var clients = [...new Set(projects.map(p => p.company))].length

    return (
        <DashboardLayout>
            <Typography variant="h4">Overview</Typography>
            <Grid container className="lg:space-y-0 lg:space-x-10 space-y-10 mt-10">

                <Grid item
                    xs={12}
                    lg={3}>
                    <OverViewCard num={
                            projects.length
                        }
                        color="text-purple-400"
                        title="current projects"/>
                </Grid>
                <Grid item
                    xs={12}
                    lg={3}>
                    <OverViewCard num={
                            projects.filter(p => p.state === 1).length
                        }
                        color="text-green-400"
                        title="COMPLETED PROJECTS"/>

                </Grid>
                <Grid item
                    xs={12}
                    lg={3}>
                    <OverViewCard num={
                            clients
                        }
                        color="text-blue-400"
                        title="CLIENTS"/>

                </Grid>


            </Grid>
            <br/>
            <br/>
            <Tabs indicatorColor="primary" textColor="primary"
                value={valueTab}
                onChange={handleChange}>
                <Tab label="Projects"/>
                {/* <Tab label="Clients"/> */}
            </Tabs>
            <br/>
            <div> {
                (valueTab === 0) ? Tab1 : Tab2
            } </div>
        </DashboardLayout>
    );

}
export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})
export default index;
