import React, { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import './Profile.css'

export const Profile = () => {

    const history = useHistory()
    const [authenticatedUser,] = useContext(UserContext)
    return (
        <div className="signin">
            <img className="profileImg" src={'https://thispersondoesnotexist.com/image '} alt={'Error'} style={{ width: 35 }} />
            <span>{authenticatedUser}</span>

            <div className="profileDropdown">
                <span onClick={() => history.push(RoutingPath.SettingsView)}>Profile</span>
                <span>Logout</span>
            </div>
        </div>
    )
}
