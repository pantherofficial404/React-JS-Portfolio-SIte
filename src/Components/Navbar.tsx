import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Drawer, List, ListItemText, ListItem } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import { MenuOutlined } from '@material-ui/icons'
import colors from '../Constants/Colors';
const Style = makeStyles(theme => ({
  navbarContainer: {
    backgroundColor: colors.snow,
    minHeight: 36
  },
  brandLogo: {
    color: colors.black,
    flexGrow: 1
  },
  navigationMenu: {
    color: colors.black,
    borderBottom: '4px solid transparent',
    transition: 'all 200ms ease-out',
    fontWeight: 'bold',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      borderBottom: '4px solid #816CFA'
    }
  },
  navigationMenuSelected: {
    color: colors.black,
    fontWeight: 'bold',
    borderBottom: '4px solid #816CFA',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  },
  navigationBar: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    marginRight: '5rem',
    '@media (max-width:770px)': {
      display: 'none'
    },
    height: '3.5rem'
  },
  profileButton: {
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    backgroundColor: colors.themeColor,
    '@media (max-width:599px)': {
      top: '1.5rem',
      right: '0rem'
    },
    '&:hover': {
      backgroundColor: colors.themeColor
    }
  },
  profileButtonText: {
    color: colors.snow
  },
  list: {
    width: '20rem'
  },
  menuContainer: {
    display: 'none',
    '@media (max-width:770px)': {
      display: 'inline',
    },
  },
  headerText: {
    width: '13rem',
  },
}));

interface NavbarProps {
  handleMenuNavigation: any;
}
const Navbar: React.FC<NavbarProps> = props => {
  const style = Style();
  const [isDrawerOpen, setDrawer] = React.useState(false);
  const { handleMenuNavigation } = props;
  const navigationMenu = [
    { title: 'HOME', path: '/' },
    { title: 'SKILL', path: '/skill' },
    { title: 'EXPERIENCE', path: '/experience' },
    { title: 'WORK', path: '/work' },
    { title: 'CONTACT', path: '/contact' }
  ];

  const navigation = navigationMenu.map((menu, index) => {
    return (
      <Link
        to={menu.path}
        className={
          window.location.pathname === menu.path
            ? style.navigationMenuSelected
            : style.navigationMenu
        }
        onClick={() => {
          handleMenuNavigation(index);
        }}
        key={index}
      >
        {menu.title}
      </Link>
    );
  });
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={style.navbarContainer}>
          <Typography variant="h5" className={style.brandLogo}>
            Kishan Mundha
          </Typography>
          <div className={style.navigationBar}>{navigation}</div>
          <IconButton className={style.menuContainer} onClick={() => setDrawer(true)}><MenuOutlined color="primary" /></IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawer(false)}>
            <List component="nav">
              <ListItem button className={style.headerText} component={NavLink} to="/" onClick={() => setDrawer(false)}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button className={style.headerText} component={NavLink} to="/skill" onClick={() => setDrawer(false)}>
                <ListItemText primary="Skill" />
              </ListItem>
              <ListItem button className={style.headerText} component={NavLink} to="/experience" onClick={() => setDrawer(false)}>
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem button className={style.headerText} component={NavLink} to="/work" onClick={() => setDrawer(false)}>
                <ListItemText primary="Work" />
              </ListItem>
              <ListItem button className={style.headerText} component={NavLink} to="/contact" onClick={() => setDrawer(false)}>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
