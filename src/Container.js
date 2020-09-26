import React from 'react';
import './Container.css';
import Sidemenu from './Sidemenu';
import Carousels from './Carousels';
import CallIcon from '@material-ui/icons/Call';


function Container() {
    return (
        <div className="container">
           
                {/* sidemenu */}
            <Sidemenu />
            {/* carousel */}
            <Carousels />
            {/* button */}
            <div className="container__left">
                <button className="call__button">
                <CallIcon />
                </button>
            </div>
              
               

        </div>
    )
}

export default Container;
