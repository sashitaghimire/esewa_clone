import React from 'react';
import './PopularServices.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';


function PopularServices() {
    return (
        <div className="popularServices">
            <div className="popularServices__right">
                <h4>Popular Services</h4>
            </div>
            <div className="popularServices__middle">

            </div>
            <div className="popularServices__left">
                < Button>View More
                <ChevronRightIcon/></Button>
                
            </div>
        </div>

    )
}

export default PopularServices;
