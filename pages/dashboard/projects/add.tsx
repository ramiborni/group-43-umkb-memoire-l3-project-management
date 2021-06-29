import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import { InferGetStaticPropsType } from "next";
import {
    Avatar,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Step,
    StepLabel,
    Stepper,
    TextField,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "moment";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { projectState } from './../../../state'
import { useRecoilState, useRecoilValue } from 'recoil'
import {useRouter} from 'next/router'



const add = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [projects,setProjects] = useRecoilState(projectState)
    const router = useRouter()



    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [projectObjectives, setProjecObjectives] = useState([]);
    const [projectField, setProjectField] = useState("");
    const [selectedExpectedStartDate, handleExpectedStartDateChange] = useState(moment());
    const [selectedExpectedEndDate, handleExpectedEndDateChange] = useState(moment());
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, {
            id: tasks.length,
            title: taskTitle,
            description: taskDescription,
            state: 0
        }]);
        setTaskTitle("");
        setTaskDescription("");

    }

    const saveProject = () => {
        setProjects([...projects,{
            id: projects.length,
            name: projectName,
            descrption: projectDescription,
            objectives: projectObjectives,
            expectedStartDate: selectedExpectedStartDate.format('YYYY-MM-DD'),
            expectedDeadLine: selectedExpectedEndDate.format('YYYY-MM-DD'),
            tasks: tasks,
            module: {
                id:0,
                moduleName: projectField
            }
        }])
        router.push('/dashboard/projects/')
    }


    const CardOne = <Paper elevation={0}
        className="p-10 lg:px-52 space-y-3 rounded-xl shadow-lg text-center">
        <div className="space-y-5">
            <Typography variant="h4">Project Informations</Typography>
            <Typography variant="subtitle1">Here you should add all principal informations about the new project</Typography>
        </div>
        <br />
        <br />
        <TextField onChange={(event) => setProjectName(event.target.value)} required label="Project name" fullWidth variant="outlined" />
        <TextField onChange={(event) => setProjectDescription(event.target.value)} required multiline label="Description" fullWidth variant="outlined" />
        <Autocomplete multiple id="tags-filled"
            options={
                []
            }
            freeSolo
            onChange={(event, value) => setProjecObjectives([...projectObjectives, value])}
            renderTags={
                (value: string[], getTagProps) => value.map((option: string, index: number) => (
                    <Chip label={option}
                        {...getTagProps({ index })} />
                ))
            }
            renderInput={
                (params) => (
                    <TextField required multiline {...params} variant="outlined" label="Project Objectives" />
                )
            } />

        <TextField onChange={(event) => setProjectField(event.target.value)} required multiline label="Field" fullWidth variant="outlined" />
        <Grid container
            spacing={2}>
            <Grid item
                xs={12}
                lg={6}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker label="Expected Start Date" autoOk format="DD/MM/YYYY" inputVariant="outlined"
                        value={selectedExpectedStartDate}
                        onChange={
                            date => handleExpectedStartDateChange(date)
                        } />
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item
                xs={12}
                lg={6}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker label="Expected End Date" autoOk format="DD/MM/YYYY" inputVariant="outlined"
                        value={selectedExpectedEndDate}
                        onChange={
                            date => handleExpectedEndDateChange(date)
                        } />
                </MuiPickersUtilsProvider>
            </Grid>
        </Grid>
        <br />
        <Button disableElevation onClick={() => setActiveStep(1)}
            style={
                { width: "300px" }
            }
            variant="contained"
            color="primary">Next</Button>
    </Paper>

    const CardTwo = <Paper elevation={0}
        className="p-10  space-y-3 rounded-xl shadow-lg text-center">
        <div className="space-y-5">
            <Typography variant="h4">Tasks</Typography>
            <Typography variant="subtitle1">Here you should add the tasks and all informations about it ( title , costs , .. etc )</Typography>
        </div>
        <br />
        <br />
        <Grid container
            spacing={5}>
            <Grid item
                xs={12}
                lg={6}>
                <Paper className="p-5 space-y-4 text-left" variant="outlined">
                    <Typography variant="h6">Add task</Typography>
                    <TextField value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} fullWidth variant="outlined" label="Task title"></TextField>
                    <TextField value={taskDescription} onChange={(event) => setTaskDescription(event.target.value)} fullWidth variant="outlined" label="Description"></TextField>
                    <Button onClick={() => addTask()} variant="contained" color="primary" disableElevation fullWidth>ADD</Button>
                </Paper>
            </Grid>
            <Grid item
                xs={12}
                lg={6}>
                <Paper className="p-5 space-y-4 text-left" variant="outlined">
                    <Typography variant="h6">Tasks ({tasks.length})</Typography>
                    <List>
                        {
                            tasks.map(t =>
                                <ListItem button className="rounded-lg">
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FormatListBulletedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={t.title} secondary={t.description} />
                                </ListItem>
                            )
                        }

                    </List>
                </Paper>
            </Grid>
        </Grid>
        <Button onClick={() => saveProject()} style={{ width: '100px' }} disableElevation variant="contained" color="primary">Save</Button>
    </Paper>

    const getCard = () => {
        switch (activeStep) {
            case 0:
                return CardOne;
            case 1:
                return CardTwo;

        }
    }

    return (
        <DashboardLayout>
            <div className="p-10 flex flex-col space-y-10">
                <Typography variant="h4" className="font-bold">
                    Add Project
                </Typography>
                <Paper elevation={0}
                    className="p-5 rounded-xl shadow-lg">
                    <Stepper activeStep={activeStep}>
                        <Step>
                            <StepLabel>Project Informations</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Tasks</StepLabel>
                        </Step>
                    </Stepper>
                </Paper>
                {
                    getCard()
                } </div>
        </DashboardLayout>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})

export default add;
