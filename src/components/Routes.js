import React, {useContext} from 'react'

import {Router, Switch, Route, Redirect} from 'react-router'

import {Context} from '../contexts/authContext'

import Login from '../pages/login'
import Register from '../pages/register'
import Home from '../pages/home'
import NotFound from './NotFound'

import {history} from '../history'


function CustomRoute({isPrivate, ...rest}) {
    const {authenticated,loading} = useContext(Context);

    if(loading){
        return '';
    }

    if (isPrivate && !authenticated) {
        return < Redirect to="/login"/>
    }

    return <Route {...rest}/>
}

const Routes = () => (
    <Router history={history}>
        <Switch>
            <CustomRoute component={Login} exact path="/login"/>
            <CustomRoute component={Register} exact path="/register"/>
            <CustomRoute isPrivate component={Home}  path="/home"/>
            <CustomRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes
