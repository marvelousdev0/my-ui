import makeStyles from '@mui/styles/makeStyles';
import { blueGrey } from '@mui/material/colors';

const drawerWidth = 240;

const sideNavStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  paper: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    borderRight: 'none',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
    borderRight: 'none',
  },
  drawerToolbar: {
    height: 72,
    alignItems: 'flex-start',
    padding: theme.spacing(2, 1),
  },
  logo: {
    height: 48,
    width: 48,
  },
  appTitle: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
    paddingLeft: theme.spacing(1),
  },
  userContainer: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    alignItems: 'center',
  },
  userActionsContainer: {
    paddingTop: theme.spacing(1),
    '& > *': {
      marginRight: theme.spacing(2),
    },
  },
  drawerContainer: {
    height: 'calc(100vh - 105px)',
    padding: theme.spacing(2, 0),
    backgroundColor: blueGrey[900],
  },
  list: {
    paddingTop: theme.spacing(3),
  },
  collapseWrapper: {
    backgroundColor: theme.palette.common.black,
  },
  versionWrapper: {
    height: 64,
    margin: theme.spacing(3, 2, 1),
    display: 'flex',
    alignItems: 'center',
  },
}));

export default sideNavStyles;
