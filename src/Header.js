import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import {Button} from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            
           
           <a href="/" >
            <img  className="header__logo "src="https://www.esewa.com.np/common/images/esewa_logo.png" atl="esewa_icon" alt="esewa-logo"/>
            </a>
        
        <div className="header__searchbox">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
        </div>
           

       <div className="header__middle">
       <div className="header__user">
            <PersonIcon  className="header__personIcon"/>
            <input type="text"/>
            </div>

        <div className="header__passwordBox">
            <div className="header__password">
            <LockIcon  className="header__lockIcon"/>
            <input type="password"/>
            </div>
            <a  href="#forgot">Forgot Password?</a>
        </div>

       </div>
           
        
        <div className="header__left">
        <div className="header__loginbtn">
        <Button  variant="outlined">Login</Button>
        </div>

        <div className="header__registerbtn">
        <Button  variant="outlined">Register</Button>
        </div>  
        </div>
        


    
            
        </div>
    )
}

export default Header;
