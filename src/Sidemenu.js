import React from 'react'
import './Sidemenu.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function Sidemenu() {
    return (
        <div className="sidemenu">
            <List >
             <ListItem button>
               <ListItemText>Topup & Recharge</ListItemText>
               <ChevronRightIcon />
            </ListItem>

            <ListItem button>
               <ListItemText>Electricity & Water</ListItemText>
               <ChevronRightIcon/>
            </ListItem>

            <ListItem button>
               <ListItemText>TV Payment</ListItemText>
               <ChevronRightIcon />
            </ListItem>

            <ListItem button>
               <ListItemText>Bus Ticket/ Tours & Travel</ListItemText>
               <ChevronRightIcon  />
            </ListItem>

            <ListItem button>
              <ListItemText>School & College</ListItemText>
              <ChevronRightIcon  />
             </ListItem>

            <ListItem button>
              <ListItemText>Credit Card Payment</ListItemText>
              <ChevronRightIcon  />
            </ListItem>

            <ListItem button>
               <ListItemText>  Insurance/ Finance/ EMI</ListItemText>
               <ChevronRightIcon/>
            </ListItem>

            <ListItem button>
              <ListItemText>Movies & Entertainment</ListItemText>
              <ChevronRightIcon  />
            </ListItem>
           </List> 
        </div>
    )
}

export default Sidemenu;
