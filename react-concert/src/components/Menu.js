import React from 'react';
// import des styles
import '../styles/menu.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Menu extends React.Component{
    render () {
        return (
           <div className="menu__wrapper">
               <Link className='about' to="/">
                    About
               </Link>
               <Link className='contact' to="">
                    contact
               </Link>
           </div>
        )
    }
}
export default Menu;