import React, { useEffect, useState } from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom'

function Nav() {
    const [show, handelShow] = useState(false);

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handelShow(true);
        } else {
            handelShow(false)
        }

    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)
        return () => window.removeEventListener('scroll',transitionNavbar)
    }, [])

    const navigate  = useNavigate();

    return (
        <div className={`nav ${ show && "nav_black"}`}>
            <div className='nav_contents'>
                <img onClick={() => navigate('/')}
                className='nav_logo' 
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' />

                <img onClick={() => navigate('/profile')}
                className='nav_avater' 
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
            </div>
        </div>
    )
}

export default Nav