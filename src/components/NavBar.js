import React, { useState, useEffect } from 'react'

import Nav from 'react-bootstrap/Nav'
import Menu from './Menu'
import {Link} from 'react-router-dom'

function NavBar(props){
    const [open, setState] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      }, [])

    const handleScroll = () => {
        if (window.scrollY > 20) {
          document.querySelector(".nav").className = "nav scroll";
        } else {
          document.querySelector(".nav").className = "nav";
        }
      }


    const handleClick = () => {
        setState(!open)
    }

    let isShow = "height-80"

    if (open) { isShow = "menu-box" }

    return(
        <div  className={isShow}>
            <Nav
                fill
                className="pt-3 pb-3"
                >
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/"><img className="logo" src= "https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/icons/Logo.svg" alt="Logo" /></Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="menu" onSelect={handleClick}>
                    {open
                        ? <img className="menu" src="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/icons/Vector+(1).svg" alt="menu"  />
                        : <img className="menu" src="https://cinema226.s3-us-west-2.amazonaws.com/C226+web+page2021/icons/menu.svg" alt="menu" />
                    }
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            {open 
                ? <Menu  />
                : false
            }
        </div>
    )
}

export default NavBar