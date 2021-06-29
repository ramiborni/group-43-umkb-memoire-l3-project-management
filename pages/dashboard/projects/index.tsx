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
import { useRecoilState, useRecoilValue } from 'recoil'
import {userState, projectState} from './../../../state'

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {t} = useTranslation('dashboard');

    const [valueTab, setValueTab] = React.useState(0);
    const [valueState, setValueState] = React.useState(0);
    const handleChange = (event : React.ChangeEvent < {} >, newValue : number) => {
        setValueTab(newValue);
    };
    const handleChangeStateProject = (event : React.ChangeEvent < {} >, newValue : number) => {
        setValueState(newValue);
    };
    const projects = useRecoilValue(projectState)


    const Tab1 = <>
        <Grid container alignItems="center">
            <Grid item
                xs={8}
                lg={6}
                className="space-x-5">
              &nbsp;

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
                { projects.filter(p => moment().diff(moment(p.expectedStartDate, 'YYYY-MM-DD'), 'months', true) <= 1).map((p,index) => <ProjectCard key={index} project={p}/>)}
                </Grid>
            <Grid item
                xs={12}
                md={6}
                lg={4}
                className="space-y-5">
                <Typography variant="h5" className="text-yellow-500 font-extrabold">
                    • IN PROGRESS
                </Typography>
                { projects.filter(p => p).map((p,index) => <ProjectCard key={index} project={p}/>)}

            </Grid>
            <Grid item
                xs={12}
                md={6}
                lg={4}
                className="space-y-5">
                <Typography variant="h5" className="text-green-500 font-extrabold">
                    • COMPLETED
                </Typography>
                { projects.filter(p => null).map((p,index) => <ProjectCard key={index} project={p}/>)}

            </Grid>
        </Grid>

    </>

    const Tab2 = <></>


    return (
        <DashboardLayout>
            <Typography variant="h4">Overview</Typography>
            <Grid container className="lg:space-y-0 lg:space-x-10 space-y-10 mt-10">

                <Grid item
                    xs={12}
                    lg={5}>
                    <OverViewCard num={
                            projects.length
                        }
                        color="text-purple-400"
                        title="current projects"/>
                </Grid>
                <Grid item
                    xs={12}
                    lg={5}>
                    <OverViewCard num={
                           0
                        }
                        color="text-green-400"
                        title="COMPLETED PROJECTS"/>

                </Grid>
               


            </Grid>

            
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
