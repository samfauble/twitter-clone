import React from 'react'
import {NavLink} from "react-router-dom"

function Nav() {
    return (
        <ul className="nav">
            <li className="navItem">
                <NavLink
                    style={{textDecoration: "none"}}
                    activeStyle={{fontWeight: "800"}}
                    exact to="/">
                        Home
                </NavLink>
            </li>
            <li className="navItem">
                <NavLink
                    style={{textDecoration: "none"}}
                    activeStyle={{fontWeight: "800"}}
                    exact to="/new">
                        New Tweet
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav
