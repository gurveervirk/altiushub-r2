import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (  
        <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        ModalProps={{
            keepMounted: true,
        }}
      >
        <List
        component="nav"
        aria-labelledby="sidebar"
        subheader={
          <ListSubheader component="div" id="sidebar">
            Pages
          </ListSubheader>
        }>
          <ListItemButton component={Link} to={'/'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={Link} to={'/invoices'}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Invoices" />
          </ListItemButton>
        </List>
      </Drawer>
    );
}

export default SideNav;