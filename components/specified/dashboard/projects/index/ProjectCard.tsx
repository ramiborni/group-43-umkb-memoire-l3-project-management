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
                                project.name
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
                                    <Chip icon={<AssignmentRoundedIcon/>}
                                        label={
                                            project.tasks.filter(t => t.state===1).length + '/' + project.tasks.length
                                        }
                                        color='primary'></Chip>
                                </li>
                                <li>
                                    <Chip icon={<EventNoteRoundedIcon className="text-red-500"/>}
                                        label={
                                            project.expectedDeadLine
                                        }
                                        className="bg-red-100 text-red-500"></Chip>

                                </li>
                                
                            </ul>
                          


                            <Grid container alignItems="center" spacing={2}>
                                <Grid item xs={9} md={10} lg={9}>
                                    <LinearProgress className="h-2 rounded-xl" variant="determinate" value={project.tasks.filter(t => t.state===1).length / project.tasks.length*100} />
                                </Grid>
                                <Grid item xs={3} md={2} lg={3} className="text-center">
                                    <Typography className="font-bold">{Math.round(project.tasks.filter(t => t.state===1).length / project.tasks.length*100)} %</Typography>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </CardActionArea>
                </Card>
    );
}

export default ProjectCard;