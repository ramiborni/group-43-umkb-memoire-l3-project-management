import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import React, {Fragment, useContext, useEffect, useState} from 'react'
import LoginLayout from '../components/layouts/LoginLayout'
import OutlinedInputTextField from '../components/public/inputs/OutlinedInputTextField'
import {useRouter} from 'next/router'
import Link from 'next/link'
import LoginContext from '../context/LoginContext'
import Notiflix from "notiflix";
import PrimaryButton from '../components/public/buttons/PrimaryButton'
import UtilStyle from '../styles/Utilities.module.css'
import Card from '../components/public/InfoCard'
import GeneralHead from '../components/public/heads/GeneralHead'
import {
    Button,
    CardContent,
    CardHeader,
    Collapse,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from '@material-ui/core'
import InfoCard from '../components/public/InfoCard'
import { SnackbarProvider } from 'notistack';
import { AccountCircle } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { InferGetStaticPropsType } from "next";

/**
 * CREATED By Borni Ahmed Rami ( borniahmedrami@gmail.com / github : @rikiraspoutine ) in 04/29/2021 
 * TESTED IN Fedora 33
 * THIS PAGE CAN BE CALLED ALSO AN LOGIN PAGE
 * TODO: ADD login.tsx to redirect to index.tsx
 */

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const {t} = useTranslation('login')
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const notistackRef = React.createRef();


    const login = () => {
        if (!(username && password)) {
            // @ts-ignore
            notistackRef.current.enqueueSnackbar(t('empty-form'), {
                variant: 'warning',
                autoHideDuration: 3000,
                snack,
            });
        } else {
            router.push('/dashboard');
        }

    }
    const snack = key => (
        <Fragment>
            <IconButton  onClick={() => { this.props.closeSnackbar(key) }}>
                   <CloseIcon/>
            </IconButton>
        </Fragment>
    );

    return (
        <SnackbarProvider ref={notistackRef} TransitionComponent={Collapse} maxSnack={3}>
           <LoginContext.Provider value={
            {username, password}
        }>
            <GeneralHead title={
                t('login')
            }></GeneralHead>

            <LoginLayout>
                <Grid container alignItems="center" className="mt-5">
                    <Grid item
                        xs={12}
                        md={6}>
                        <InfoCard>
                            <CardContent className="space-y-8" >
                                <Grid container={true}
                                    direction="row"  
                                    justify="center"
                                    alignItems="center">
                                    <Grid item
                                        xs={10} className="space-y-5">
                                        <Typography className="font-bold" variant="h4">
                                            {
                                            t('login')
                                        } </Typography>
                                        <Typography> {
                                            t('welcome')
                                        } </Typography>
                                    </Grid>
                                    <Grid className="hidden md:block" justify="flex-end" item
                                        md={2}>
                                        <img className="m-auto" height="50" width="50" src="logo-non-text.jpg"/>
                                    </Grid>
                                </Grid>
                                <form className="space-y-5">
                                    <TextField placeholder={t('username')} onChange={(event) => setUsername(event.target.value)} name="username" variant="outlined" key="username" fullWidth required  InputProps={{
          startAdornment: (
            <InputAdornment className="mr-2" position="end">
              <AccountCircleOutlinedIcon color="action" />
            </InputAdornment>
          ),
        }}
                                        label={
                                            t('username')
                                    }></TextField>
                                    <TextField placeholder={t('password')} InputProps={{
          startAdornment: (
            <InputAdornment className="mr-2" position="end">
              <LockOutlinedIcon color="action" />
            </InputAdornment>
          ),
        }} onChange={(event) => setPassword(event.target.value)} name="password" variant="outlined" key="password" fullWidth required
                                        label={
                                            t('password')
                                    }></TextField>

                                    <Button style={{height:'40px'}} onClick={() => login()} disableElevation fullWidth variant="contained" color="primary">
                                        {t('login')}
                                    </Button>

                                    
                                    
                                </form>
                                <div className="text-center">
                                   <Link href="/reset">
                                   <Button variant="text" color="primary">
                                        {t('forgot_password')}
                                    </Button>
                                   </Link>
                                </div>

                               
                            </CardContent>
                        </InfoCard>
                    </Grid>
                </Grid>
            </LoginLayout>
        </LoginContext.Provider>
        </SnackbarProvider>

    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'login'])
    }
})
