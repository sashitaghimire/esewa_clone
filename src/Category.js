import React from 'react';
import './Category.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';


function Category({title, button}) {
    return (
        <div className="category">
            <div className="category__right">
              <h4>{title}</h4>
            </div>
            <div className="category__middle">

            </div>
            <div className="category__left">
                < Button>{button}
                <ChevronRightIcon/></Button>
                
            </div>
        </div>

    )
}

export default Category;
