import React, { useContext } from 'react'
import Logotype from '../../shared/images/Beer.svg'
import './NavigationBar.css'
import RoutingPath from '../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/provider/UserProvider'
import { Profile } from '../profile/Profile'


export const NavigationBar = () => {
    const history = useHistory()
    const [authenticatedUser,] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        if (authenticatedUser) {
            return <Profile />
        }
        else {
            return <span className="signin" onClick={() => history.push(RoutingPath.SignInView)}>Log in</span>
        }
    }

    return (
        <div className="navigationBarWrapper">
            <img className="logotype" src={Logotype} alt={'Error...'} onClick={() => history.push(RoutingPath.HomeView)} />
            <h1 className="headerTitle">Beerutiful</h1>
            {displayUserIfAuthenticated()}
        </div>
    )
}