import { Card, CardActionArea, CardContent, Typography, Chip, Grid, LinearProgress } from "@material-ui/core";
import React from "react";
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
const ProjectCard = ( {project}) => {
    return (
        <Card elevation={0}
                    className="shadow-md rounded-lg">
                    <CardActionArea>
                        <CardContent className="p-5 space-y-5">
                          
                            <Typography variant="h6" className="truncate">
                                {
                                project.title
                            }</Typography>
                          
                            <Typography variant="caption">
                                {
                                project.description
                            } </Typography>
                            
                            <ul className="flex space-x-2"
                                style={
                                    {listStyle: 'none'}
                            }>
                                <li>
                                    <Chip color='primary' icon={<BusinessRoundedIcon/>} label={project.company}></Chip>
                                </li>

                                <li>
                                    <Chip icon={<LinkRoundedIcon/>}
                                        label={
                                            project.docs
                                        }
                                        color='primary'></Chip>
                                </li>
                                <li>
                                    <Chip icon={<AssignmentRoundedIcon/>}
                                        label={
                                            project.progressedTasks + '/' + project.totalTasks
                                        }
                                        color='primary'></Chip>
                                </li>
                                
                            </ul>
                            <ul className="flex space-x-2" style={{listStyle: 'none'}}>
                            <Chip icon={<AccountCircleRoundedIcon/>}
                                        label={
                                            project.employers
                                        }
                                        color='primary'></Chip>
                            <li>
                                    <Chip icon={<EventNoteRoundedIcon className="text-red-500"/>}
                                        label={
                                            project.deadline
                                        }
                                        className="bg-red-100 text-red-500"></Chip>

                                </li>
                            </ul>


                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={9} md={10} lg={9}>
                                    <LinearProgress className="h-2 rounded-xl" variant="determinate" value={project.progressedTasks / project.totalTasks*100} />
                                </Grid>
                                <Grid item xs={3} md={2} lg={3} className="text-center">
                                    <Typography className="font-bold">{Math.round(project.progressedTasks / project.totalTasks*100)} %</Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
    );
}

export default ProjectCard;