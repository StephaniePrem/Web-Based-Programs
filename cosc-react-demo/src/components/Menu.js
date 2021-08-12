import React from 'react'
import {NavLink} from 'react-router-dom';

function Menu(props) {
    return (
        <nav className="top-menu">
            <ul>
                <li><NavLink exact={true} activeClassName='active' to='/'>Home</NavLink></li>
                <li><NavLink exact={true} activeClassName='active' to='/request-info'>Request Info</NavLink></li>
                <li><NavLink exact={true} activeClassName='active' to='/inquiries'>Inquiries</NavLink></li>
                <li><NavLink exact={true} activeClassName='active' to='/about-us'>About Us</NavLink></li>
                <li className="tagline">{ props.tagline }</li>
            </ul>
        </nav>
    )
}

// Menu.propTypes = {

// }

export default Menu;


