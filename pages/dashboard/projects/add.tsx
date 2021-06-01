import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React, {useState} from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import {InferGetStaticPropsType} from "next";
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
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import moment from "moment";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const add = (props : InferGetStaticPropsType < typeof getStaticProps >) => {
    const [activeStep, setActiveStep] = useState(2);
    const [open, setOpen] = React.useState(false);

    const [selectedExpectedStartDate, handleExpectedStartDateChange] = useState(moment());
    const [selectedExpectedEndDate, handleExpectedEndDateChange] = useState(moment());
    const CardOne = <Paper elevation={0}
    className="p-10 lg:px-52 space-y-3 rounded-xl shadow-lg text-center">
    <div className="space-y-5">
        <Typography variant="h4">Project Informations</Typography>
        <Typography variant="subtitle1">Here you should add all principal informations about the new project</Typography>
    </div>
    <br/>
    <br/>
    <TextField required label="Project name" fullWidth variant="outlined"/>
    <TextField required multiline label="Description" fullWidth variant="outlined"/>
    <TextField required multiline label="Project Goal" fullWidth variant="outlined"/>
    <Autocomplete multiple id="tags-filled"
        options={
            []
        }
        freeSolo
        renderTags={
            (value : string[], getTagProps) => value.map((option : string, index : number) => (
                <Chip label={option}
                    {...getTagProps({ index })}/>
            ))
        }
        renderInput={
            (params) => (
                <TextField required multiline {...params} variant="outlined" label="Project Objectives"/>
            )
        }/>
    <TextField required multiline label="Strategic Alignment" fullWidth variant="outlined"/>
    <Autocomplete multiple id="tags-filled"
        options={
            []
        }
        freeSolo
        renderTags={
            (value : string[], getTagProps) => value.map((option : string, index : number) => (
                <Chip label={option}
                    {...getTagProps({ index })}/>
            ))
        }
        renderInput={
            (params) => (
                <TextField multiline {...params} variant="outlined" label="Stakeholders"/>
            )
        }/>
    <Autocomplete multiple id="tags-filled"
        options={
            []
        }
        freeSolo
        renderTags={
            (value : string[], getTagProps) => value.map((option : string, index : number) => (
                <Chip label={option}
                    {...getTagProps({ index })}/>
            ))
        }
        renderInput={
            (params) => (
                <TextField multiline {...params} variant="outlined" label="Risks"/>
            )
        }/>
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
                    }/>
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
                    }/>
            </MuiPickersUtilsProvider>
        </Grid>
    </Grid>
    <br/>
    <Button disableElevation onClick= { () => setActiveStep(1)}
        style={
            {width: "300px"}
        }
        variant="contained"
        color="primary">Next</Button>
</Paper>
const CardTwo = <Paper elevation={0}
    className="p-10  space-y-3 rounded-xl shadow-lg text-center">
    <div className="space-y-5">
        <Typography variant="h4">Client Informations</Typography>
        <Typography variant="subtitle1">Here you should choose an existing client or add new one</Typography>
    </div>
    <br/>
    <br/>
    <div className="justify-end flex">
        <Button onClick={
                () => setOpen(true)
            }
            disableElevation
            variant="contained"
            color="primary">Choose an existing client</Button>
        <Dialog open={open} aria-labelledby="dialog-title"  aria-describedby="dialog-description"
            onClose={
                () => setOpen(false)
        }>
            <DialogTitle style={{minWidth:'400px'}} id="dialog-title">Add existing client</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">
                 <Autocomplete options={[]} renderInput={(params)=><TextField fullWidth {...params} label="Entreprise name / Client name" variant="outlined"></TextField>} ></Autocomplete>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}
                    color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {setOpen(false);setActiveStep(2)}}
                    color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    </div>
    <div className="lg:px-52 space-y-3 ">
        <Typography variant="h6">Add new client</Typography>
        <TextField required label="Client's fullname" fullWidth variant="outlined"/>
        <TextField required label="Company" fullWidth variant="outlined"/>
        <TextField required label="Country" fullWidth variant="outlined"/>
        <TextField required label="Address" fullWidth variant="outlined"/>
        <TextField required label="2nd Address" fullWidth variant="outlined"/>
        <TextField required label="Phone Number" fullWidth variant="outlined"/>
        <TextField required label="E-mail" fullWidth variant="outlined"/>
        <br/>
        <Button disableElevation onClick= { () => setActiveStep(2)}
        style={
            {width: "300px"}
        }
        variant="contained"
        color="primary">Next</Button>


    </div>
</Paper>

    const CardThree = <Paper elevation={0}
        className="p-10  space-y-3 rounded-xl shadow-lg text-right">
        <div className="space-y-5">
            <Typography variant="h4">Tasks</Typography>
            <Typography variant="subtitle1">Here you should add the tasks and all informations about it ( title , costs , .. etc )</Typography>
        </div>
        <br/>
        <br/>
        <Grid container
            spacing={5}>
            <Grid item
                xs={12}
                lg={6}>
                <Paper className="p-5 space-y-4 text-left" variant="outlined">
                    <Typography variant="h6">Add task</Typography>
                    <TextField fullWidth variant="outlined" label="Task title"></TextField>
                    <TextField fullWidth variant="outlined" label="Deliverables"></TextField>
                    <Typography variant="body2">Internal Ressources</Typography>
                    <TextField fullWidth variant="outlined" label="Effort( m ∙ h )"></TextField>
                    <TextField fullWidth variant="outlined" label="Costs ($)"></TextField>
                    <Typography variant="body2">External Ressources</Typography>
                    <TextField fullWidth variant="outlined" label="Effort( m ∙ h )"></TextField>
                    <TextField fullWidth variant="outlined" label="Costs ($)"></TextField>
                    <br/>
                    <TextField fullWidth variant="outlined" label="Material Ressources ($)"></TextField>
                    <Button variant="contained" color="primary" disableElevation fullWidth>ADD</Button>
                </Paper>
            </Grid>
            <Grid item
                xs={12}
                lg={6}>
                <Paper className="p-5 space-y-4 text-left" variant="outlined">
                    <Typography variant="h6">Tasks</Typography>
                    <List>
                        <ListItem button className="rounded-lg">
                            <ListItemAvatar>
                                <Avatar>
                                    <FormatListBulletedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Gestion du projet" secondary="518 $ / 121 m ∙ p"/>
                        </ListItem>
                        <ListItem button className="rounded-lg">
                            <ListItemAvatar>
                                <Avatar>
                                    <FormatListBulletedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Marketing" secondary="138 $ / 25 m ∙ p"/>
                        </ListItem>
                        <ListItem button className="rounded-lg">
                            <ListItemAvatar>
                                <Avatar>
                                    <FormatListBulletedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Design" secondary="146 $ / 15 m ∙ p"/>
                        </ListItem>
                        <ListItem button className="rounded-lg">
                            <ListItemAvatar>
                                <Avatar>
                                    <FormatListBulletedIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Gestion du projet 2" secondary="1057 $ / 125 m ∙ p"/>
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
        <Button style={{width:'100px'}} disableElevation variant="contained" color="primary">Next</Button>
    </Paper>

    const getCard = () => {
        switch (activeStep) {
            case 0:
                return CardOne;
            case 1:
                return CardTwo;
            case 2:
                return CardThree;

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
                            <StepLabel>Client Informations</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Tasks</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel>Confirmation</StepLabel>
                        </Step>
                    </Stepper>
                </Paper>
                {
                getCard()
            } </div>
        </DashboardLayout>
    );
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['dashboard'])
    }
})

export default add;
