import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { SignInView } from '../views/SignInView'
import { SettingsView } from '../views/SettingsView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'

export const Routes = (props) => {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    //if/else-sats
    const blockRouteIfNotAuthenticated = (navigateToView) => {
        return authenticatedUser ? navigateToView : SignInView
    }

    const checkIfUserIsAuthenticated = () => {
        setAuthenticatedUser(localStorage.getItem('username'))
    }

    useEffect(() => {
        checkIfUserIsAuthenticated()
    })

    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.SignInView} component={SignInView} />
                <Route exact path={RoutingPath.SettingsView} component={blockRouteIfNotAuthenticated(SettingsView)} />
                <Route component={HomeView} />
            </Switch>
        </Router>
    )
}