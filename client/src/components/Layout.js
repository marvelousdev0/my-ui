import React from 'react';
import clsx from 'clsx';
import { Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Header from './Header';
import SideNav from './SideNav';
import Content from './Content';
import Footer from './Footer';

const drawerWidth = 240;

const layoutStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  section: {
    width: `calc(100% - ${72}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  sectionShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function Layout({ lng, changeLanguage, children }) {
  const [open, setOpen] = React.useState(false);

  const handleSideNav = () => {
    setOpen(!open);
  };

  const classes = layoutStyles();

  return (
    <Box className={classes.root}>
      <SideNav open={open} handleSideNav={handleSideNav} />
      <div
        className={clsx(classes.section, {
          [classes.sectionShift]: open,
        })}
      >
        <Header open={open} lng={lng} changeLanguage={changeLanguage} handleSideNav={handleSideNav} />
        <Content open={open} children={children} />
        <Footer open={open} lng={lng} changeLanguage={changeLanguage} handleSideNav={handleSideNav} />
      </div>
    </Box>
  );
}

export default Layout;
