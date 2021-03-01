import React from 'react'

import { Link } from 'react-router-dom'
import Copyright from './Copyright'
import {Image} from 'react-bootstrap'

import Design from '../assets/icons/Desing-by.svg'


function Menu(props){
    return(
        <div className="menu-wrapper">
            <ul 
            className='text-left menu-list mt-4'>
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/nosotros">NOSOTROS</Link></li>
                <li><Link to="/proyectos">PROYECTOS</Link></li>
                <li className="d-none" ><Link to="/veintiuno+-">VEINTIUNO+-</Link></li>
                <li><Link to="/borderless">BORDERLESS</Link></li>
            </ul>
            <div className="footer-menu">
                <Copyright />
                <div className="justify-content-start d-flex">
                    <Image src={Design} />
                </div>
            </div> 
        </div>
    )
}

export default Menu