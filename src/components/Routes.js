import React, {useContext} from 'react'

import {Router, Switch, Route, Redirect} from 'react-router'

import {Context} from '../contexts/authContext'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from './NotFound'

import {history} from '../history'
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


function CustomRoute({isPrivate, ...rest}) {
    const {authenticated, loading} = useContext(Context);

    if (loading) {
        return '';
    }

    if (isPrivate && !authenticated) {
        return < Redirect to="/login"/>
    }

    if(!isPrivate && authenticated){
        return < Redirect to="/home"/>
    }

    return <Route {...rest}/>
}

const Routes = () => {

    const {authenticated,handleLogout} = useContext(Context);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    const classes = useStyles();

    return (

        <Router history={history}>
            {authenticated ? <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            React Login
                        </Typography>
                        <Button onClick={handleLogout} color="inherit">Sair</Button>
                    </Toolbar>
                </AppBar>
            </div> : null}
            <Switch>
                <CustomRoute component={Login} exact path="/login"/>
                <CustomRoute component={Register} exact path="/register"/>
                <CustomRoute isPrivate component={Home} path="/home"/>
                <CustomRoute component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default Routes
