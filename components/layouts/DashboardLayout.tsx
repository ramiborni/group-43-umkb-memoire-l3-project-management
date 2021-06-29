import {
    AppBar,
    Button,
    createStyles,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles,
    Paper,
    TextField,
    Theme,
    Toolbar,
    Typography
} from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AccountCircle } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { ReactNode, useEffect } from 'react';
import GeneralHead from '../public/heads/GeneralHead';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import AllInboxRoundedIcon from '@material-ui/icons/AllInboxRounded';
import PollRoundedIcon from '@material-ui/icons/PollRounded';
import UserCardHorizantal from '../specified/dashboard/layout/UserCardHorizantal';
import User from '../../models/User';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../state';
const drawerItems = [
    {
        name: 'Dashboard',
        path: '',
        icon: <DashboardRoundedIcon />
    },
    {
        name: 'Projects',
        path: '/projects',
        icon: <BusinessCenterRoundedIcon />
    },
    /*{
      name:'Tasks',
      path:'/tasks',
      icon: <AssignmentRoundedIcon/>
    },
    {
      name:'Requests',
      path:'/requests',
      icon: <AllInboxRoundedIcon/>
    },
    {
      name:'Calendar',
      path:'/calendar',
      icon: <EventNoteRoundedIcon/>
    },
    {
      name:'Reports',
      path:'/reports',
      icon: <PollRoundedIcon/>
    },*/
    {
        name: "Settings",
        path: '/settings',
        icon: <SettingsApplicationsRoundedIcon />
    }
]

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            backgroundColor: 'rgb(244, 245, 247)'
        },
        drawer: {
            [theme.breakpoints.up('lg')]: {
                width: drawerWidth,

            },
            flexShrink: 0,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1000,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('lg')]: {
                display: 'none'
            }
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
            width: drawerWidth
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3)
        }
    })
);
const DashboardLayout = ({ children }: { children: ReactNode }) => {

    const { t } = useTranslation('dashboard');
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();

    const user= useRecoilValue(userState)


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(()=>{
        console.log(user)
        if(!user.username){
            router.push('/');
        }
    })

    const drawer = (
        <div>
            <Toolbar />
            <div className="my-3 p-1">
                <UserCardHorizantal userDetails={user} />

            </div>
            <Divider />

            <List className="p-3">
                {drawerItems.map((item, index) => (
                    <Link key={item.path + '_' + index} href={'/dashboard' + item.path}>
                        <ListItem selected={router.pathname === '/dashboard' + item.path} className="rounded-xl" button key={index + '-' + item.name}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>

        </div>
    );


    return (
        <>

            <GeneralHead title={t('dashboard')}></GeneralHead>
            <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                    opacity: 0
                },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}>
                <AppBar position="fixed" className={classes.appBar} color="primary" elevation={0}>
                    <Toolbar className="space-x-5">

                        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="open drawer"
                            onClick={() => handleDrawerToggle()}>
                            <MenuIcon />
                        </IconButton>
                        <Hidden mdDown implementation="css">
                            <Typography variant="h5">
                                {t('dashboard')}
                            </Typography>


                        </Hidden>
                        <span className="flex-grow text-right">

                           
                            <IconButton>
                                <AccountCircle className="text-white"></AccountCircle>
                            </IconButton>

                        </span>

                    </Toolbar>
                </AppBar>
                <nav>
                    <Hidden lgUp implementation="css">
                        <Drawer
                            variant="temporary"
                            //anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}

                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>

                </nav>
                <main className={classes.content + ' lg:ml-60'}>
                    <Toolbar />
                    {children}
                </main>

            </motion.div>
        </>

    );
};

export default DashboardLayout;