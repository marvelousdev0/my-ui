import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, useScrollTrigger, Box, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Copyright } from '@styled-icons/boxicons-solid/Copyright';

const drawerWidth = 272;

const footerStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    height: 64,
    margin: theme.spacing(2, 2, 0.5),
    bottom: 0,
    top: 'unset',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    color: theme.palette.primary.main,
    width: `calc(100% - ${104}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    borderRadius: theme.spacing(2),
  },
  appBarShift: {
    paddingLeft: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    margin: theme.spacing(2),
  },
  toolbar: {
    height: 64,
    minHeight: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
  },
  copyrightText: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Footer({ open }) {
  const classes = footerStyles();
  return (
    <ElevationScroll>
      <Box className={classes.grow}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.copyrightText}>
              <Copyright className={classes.icon} />
              <span>ADP 2020</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ElevationScroll>
  );
}

export default Footer;
