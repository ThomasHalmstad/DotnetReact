import React, { useContext } from 'react'
import Logotype from '../../shared/images/Beer.svg'
import './NavigationBar.css'
import RoutingPath from '../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/provider/UserProvider'


export const NavigationBar = () => {
    const history = useHistory()

    const [authenticatedUser,] = useContext(UserContext)

    return (
        <div className="navigationBarWrapper">
            <img className="logotype" src={Logotype} alt={"Error..."} onClick={() => history.push(RoutingPath.HomeView)} />

            <span className="signin" onClick={() => history.push(RoutingPath.SignInView)}>Log in</span>

            <span>{authenticatedUser}</span>
        </div>
    )
}