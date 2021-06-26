import {Line} from "rc-progress";
import React from "react";
import InfoCard from "../../../public/InfoCard";
import UtilStyle from '../../../../styles/Utilities.module.css'
import {
    Avatar,
    Chip,
    Grid,
    IconButton,
    LinearProgress,
    Paper,
    Typography
} from "@material-ui/core";
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

const ProjectDashboardCard = ({project}) => {
    const RenderPeriorityChip = () => {
        switch (project.periority) {
            case 1:
                return <Chip className="text-red-500 border-red-500 rounded-lg" label="HIGH PERIORITY" variant="outlined"/>
                break;
            case 2:
                return <Chip className="text-yellow-500 border-yellow-500 rounded-lg" label="MID PERIORITY" variant="outlined"/>
                break;
            case 3:
                return <Chip className="rounded-lg" label="LOW PERIORITY" variant="outlined"/>
                break;
            default:
                return <></>
                break;
        }
    }
    return (
        <Paper elevation={0} className="p-4 rounded-xl space-y-5 shadow-sm">
            <Grid container alignItems="center">
                <Grid item
                    xs={3}
                    sm={2}
                    lg={2}>
                    <Avatar style={
                        {
                            backgroundColor: '#736eae',
                            color: 'white'
                        }
                    }>
                        {
                        project.company.split(' ').slice(0, 2).map(i => i[0])
                    } </Avatar>
                </Grid>
                <Grid item
                    xs={7}
                    sm={8}
                    lg={8}
                    className="flex flex-col align-center">
                    <div>
                        <Typography variant="h6" className="truncate">
                            {
                            project.title
                        }</Typography>
                    </div>
                    <div>
                        <Typography variant="subtitle2" className="truncate">
                            {
                            project.type
                        }</Typography>
                    </div>
                </Grid>
                <Grid item
                    xs={2}
                    lg={2}
                    className="text-right justify-end align-end">
                    <IconButton>
                        <MoreVertRoundedIcon/>
                    </IconButton>
                </Grid>

            </Grid>
            <Grid container alignItems="center" className="pt-2">
                <Grid item
                    xs={6}>
                    <Typography>
                        Tasks Done &nbsp;
                        <b>{
                            project.progressedTasks
                        }/{
                            project.totalTasks
                        }</b>
                    </Typography>
                </Grid>
                <Grid item
                    xs={6}
                    className="text-right">
                    {
                    RenderPeriorityChip()
                } </Grid>
            </Grid>
            <LinearProgress className='-mt-5 rounded-xl' variant="determinate"
                value={
                    project.progressedTasks / project.totalTasks * 100
                }/>
            <Chip className="text-purple-800 bg-purple-100 rounded-lg"
                label={
                    "ESTIMATED DEADLINE : " + project.deadline
                }/>

        </Paper>
    );
}

export default ProjectDashboardCard;
