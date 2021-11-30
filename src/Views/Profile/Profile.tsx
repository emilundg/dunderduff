import React, {FC} from 'react'
import Player from 'src/Components/Player'
import MyDistances from 'src/Views/Profile/MyDistances'
import WITB from 'src/Views/Profile/WITB'

const Profile : FC = () => {
    return (
        <div>
            <h1>Profile</h1>
            <MyDistances/>
            <WITB/>
            <Player/>
        </div>
    )
}
export default Profile