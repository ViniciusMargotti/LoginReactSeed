import React, {useContext} from 'react'

import {Form} from 'formik'

import './Login.css'
import {Button, Container, CssBaseline, makeStyles, TextField} from "@material-ui/core";

import {useForm, Controller} from 'react-hook-form';

import {Context} from '../../contexts/authContext'

const Login = () => {

    const {authenticated, handleLogin} = useContext(Context);

    const {handleSubmit, control} = useForm();

    const onSubmit = values => {
        handleLogin(values);
    };

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(10),
            display: 'flex',
            flexDirection: 'column',
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
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <h1>Login</h1>
                <p style={{color: "#D2D4D9"}}>Preencha seus dados para continuar</p>
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
                    <Button fullWidth type="submit" style={{marginTop: '0.8rem'}} variant="contained"
                            color="primary">
                        Entrar
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default Login
