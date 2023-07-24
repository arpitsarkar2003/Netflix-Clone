import React from 'react'
import './ProfileScreen.css'
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import PlansScreen from './PlansScreen';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen_body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen_info'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
                    <div className='profileScreen_details'>
                        <h2>{user.email}</h2>
                        <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            {/* <PlansScreen /> */}<span>plannnnnnnnssss</span>

                            <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen