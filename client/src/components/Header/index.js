import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { findKey } from 'lodash';
import { useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  useScrollTrigger,
  IconButton,
  Box,
  Badge,
  Menu,
  MenuItem,
  Button,
  ListItemIcon,
  ListItemText,
  Link,
  Typography,
  capitalize,
} from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { ChevronDown } from '@styled-icons/feather/ChevronDown';
import { Bell } from '@styled-icons/feather/Bell';
import { ToggleLeft } from '@styled-icons/feather/ToggleLeft';
import { ToggleRight } from '@styled-icons/feather/ToggleRight';
import { Home } from '@styled-icons/feather/Home';
import { Circle } from '@styled-icons/feather/Circle';
import { grey } from '@mui/material/colors';
import { links } from 'utils/routes';
import ukFlag from 'static/icons/uk.svg';
import grFlag from 'static/icons/ger.svg';
import frFlag from 'static/icons/fra.svg';

const drawerWidth = 272;

const headerStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    height: 72,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
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
    height: 72,
    display: 'flex',
    alignItems: 'center',
  },
  sectionDesktop: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(2),
    },
  },
  toggleContainer: {
    marginRight: 8,
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  breadcrumbsContainer: {
    padding: theme.spacing(1, 3),
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : grey[800],
    borderRadius: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
  },
  linkText: {
    fontSize: theme.typography.pxToRem(14),
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  lngMenu: {
    marginTop: 12,
  },
  lngMenuPaper: {
    minWidth: 132,
  },
  badge: {
    fontSize: theme.typography.pxToRem(10),
    height: 16,
    minWidth: 16,
  },
  listItemIcon: {
    minWidth: 32,
  },
  listItemText: {
    fontSize: '0.8125rem',
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

const lngOptions = [
  { label: 'English', value: 'en', icon: ukFlag },
  { label: 'German', value: 'de', icon: grFlag },
  { label: 'French', value: 'fr', icon: frFlag },
];

function Header({ open, lng, changeLanguage, handleSideNav }) {
  const { pathname } = useLocation();

  const [lngAnchorEl, setLngAnchorEl] = React.useState(null);
  const isLngMenuOpen = Boolean(lngAnchorEl);

  const handleMenuClose = () => {
    setLngAnchorEl(null);
  };

  const handleLngMenu = (event) => {
    setLngAnchorEl(event.currentTarget);
  };

  const classes = headerStyles();
  const lngMenuId = 'lng-menu';

  const filteredLngs = lngOptions.filter((lngItem) => lngItem.value !== lng);
  const renderLngMenu = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={lngAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      id={lngMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isLngMenuOpen}
      onClose={handleMenuClose}
      className={classes.lngMenu}
      classes={{ paper: classes.lngMenuPaper }}
    >
      {filteredLngs &&
        filteredLngs.length &&
        filteredLngs.map((lngItem) => {
          const { label, value, icon } = lngItem;
          return (
            <MenuItem
              key={value}
              onClick={() => {
                changeLanguage(value);
                handleMenuClose();
              }}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <img src={icon} alt={value} style={{ height: 20, width: 20 }} />
              </ListItemIcon>
              <ListItemText primary={label} classes={{ primary: classes.listItemText }} />
            </MenuItem>
          );
        })}
    </Menu>
  );
  const selectedLngOption = lngOptions.filter((lngItem) => lngItem.value === lng);
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
            <div className={classes.toggleContainer} onClick={() => handleSideNav()}>
              {open ? (
                <ToggleRight style={{ width: 28, height: 24 }} />
              ) : (
                <ToggleLeft style={{ width: 28, height: 24 }} />
              )}
            </div>
            <div className={classes.breadcrumbsContainer}>
              <Breadcrumbs
                aria-label="location-breadcrumb"
                separator={<Circle style={{ height: 6, width: 6 }} />}
                style={{ lineHeight: '14px' }}
              >
                <Link color="inherit" href="/" className={classes.linkText}>
                  <Home style={{ width: 14, height: 14 }} />
                </Link>
                {pathname !== '/' && (
                  <Typography color="inherit" className={classes.linkText}>
                    {capitalize(
                      findKey(links, function (o) {
                        return o === pathname;
                      })
                    )}
                  </Typography>
                )}
              </Breadcrumbs>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button
                variant="text"
                size="small"
                startIcon={
                  <img
                    src={selectedLngOption[0].icon}
                    style={{ height: 20, width: 20 }}
                    alt={selectedLngOption[0].value}
                  />
                }
                endIcon={<ChevronDown style={{ height: 16, width: 16 }} />}
                aria-label="language options"
                aria-controls={lngMenuId}
                arai-haspopup="true"
                onClick={handleLngMenu}
                style={{ textTransform: 'unset' }}
              >
                {selectedLngOption[0].label}
              </Button>
              <IconButton aria-label="show 4 new notifications" color="default" size="large">
                <Badge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  variant="dot"
                  color="secondary"
                >
                  <Bell style={{ height: 28, width: 28 }} />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderLngMenu}
      </Box>
    </ElevationScroll>
  );
}

export default Header;
