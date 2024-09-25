import React from 'react'
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const Navbar = () => {
  return (
    <div>
        <div className='topbar'>
            <div className='language'>
                Français
            </div>
            <div className='brand'>
                Paris2024
            </div>
            <nav>
                <ul>
                    <li><a href='/'>accueil</a></li>
                    <li><a href='/offers'>offres</a></li>
                    <li><a href='/cart'>cart</a></li>
                    <li>
                        <LoginButton />
                        <LogoutButton /> 
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar