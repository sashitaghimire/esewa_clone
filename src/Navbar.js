import React from 'react'
import './Navbar.css';
import {Button} from '@material-ui/core';

function Navbar() {
    return (
        <div className="navbar">
               <Button >Top Up</Button>
                <Button >Airlines</Button>
                <Button >Internet Bill</Button>
                <Button >Load Fund</Button>
        </div>
    )
}

export default Navbar;
