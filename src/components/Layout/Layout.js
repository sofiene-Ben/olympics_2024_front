import React from 'react'

import Profile from "../Profile";
import Navbar from './Navbar';

const Layout = (props) => {
  return (
    <React.Fragment>

        <Navbar />

 <main className="column">
            Layout
            <section>
            {props.children}
            </section>
            <h1>Auth0 Login</h1>

            <Profile />
            <a href="http://127.0.0.1:5000/add-to-cart"> add</a>
        </main>
    </React.Fragment>
       
  )
}

export default Layout