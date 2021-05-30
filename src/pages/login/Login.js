import React, {useContext} from 'react'

import {Form} from 'formik'

import './Login.css'
import {Button, CssBaseline, Divider, Grid, makeStyles, TextField, Typography} from "@material-ui/core";

import {useForm, Controller} from 'react-hook-form';

import {Context} from '../../contexts/authContext'

import mainLogo from'./../../img/backgroud-login.jpg';

const Login = () => {

    const {handleLogin} = useContext(Context);

    const {handleSubmit, control} = useForm();

    const onSubmit = values => {
        handleLogin(values);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        },
        image: {
            background: 'url('+mainLogo+')',
            backgroundRepeat: 'no-repeat',
            backgroundColor:
                theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        paper: {
            margin: theme.spacing(10, 5),
            display: 'flex',
            flexDirection: 'column',
            height:'70%'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>
            <Grid item xs={12} sm={8} md={5} elevation={6} >
                <div className={classes.paper}>
                    <img alt="logo" style={{width:'100px',alignSelf:'center',marginBottom:'50px'}} src={require('../../img/logo-colorido.svg')} />
                    <Typography variant="subtitle1" color={'textSecondary'}>
                        Digite seu email e senha, para acessar a plataforma React
                    </Typography>
                    <Form autoComplete={"off"} onSubmit={handleSubmit(onSubmit)}>
                        <div className="Login-Group">
                            <Controller
                                name="username"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        fullWidth
                                        style={{marginTop: '0.8rem'}}
                                        label="E-mail"
                                        type={"email"}
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                                rules={{required: ' O e-mail é obrigatório'}}
                            />
                        </div>
                        <div className="Login-Group">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <TextField
                                        fullWidth
                                        style={{marginTop: '0.8rem'}}
                                        label="Senha"
                                        minLength={"5"}
                                        variant="filled"
                                        value={value}
                                        onChange={onChange}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    />
                                )}
                                rules={{
                                    required: 'A senha é obrigatória',
                                    minLength: {value: 6, message: 'A senha deve ter no mínimo 6 caracteres'}
                                }}
                            />
                        </div>
                        <Button  type="submit" style={{marginTop: '0.8rem',float:'right'}} variant="contained"
                                color="primary">
                            Entrar
                        </Button>
                    </Form>
                </div>
                <Divider style={{width:'60%',margin:'auto'}} light />
                <div style={{textAlign:'center',width: '100%'}}>
                    <Typography variant="subtitle2" color={'textSecondary'}>
                        Copyright © Next Fit 2021
                    </Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login
