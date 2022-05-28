import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText, Box, Tooltip } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Link } from 'react-router-dom';
import { blue, blueGrey } from '@mui/material/colors';
import { ChevronDown } from '@styled-icons/feather/ChevronDown';
import { ChevronUp } from '@styled-icons/feather/ChevronUp';
import { Trans } from 'react-i18next';

const navItemStyles = makeStyles((theme) => ({
  listItem: (props) => ({
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    backgroundColor: props.subMenu || props.expanded || props.active ? theme.palette.common.black : blueGrey[900],
    borderLeft:
      props.active && !props.hasSubMenu
        ? `4px solid ${props.background[800]}`
        : props.active && props.hasSubMenu
        ? `4px solid ${theme.palette.common.black}`
        : props.subMenu || props.expanded
        ? `4px solid ${theme.palette.common.black}`
        : `4px solid ${blueGrey[900]}`,
    '&:hover': {
      backgroundColor: props.active || props.expanded || props.subMenu ? theme.palette.common.black : blueGrey[900],
    },
  }),
  listItemText: (props) => ({
    fontSize: props.subMenu ? theme.typography.pxToRem(12) : theme.typography.pxToRem(14),
  }),
  listItemIcon: (props) => ({
    minWidth: 24,
    marginRight: props.hasSubMenu && !props.open ? 0 : 32,
    color: props.active ? props.background[500] : theme.palette.common.white,
  }),
  subMenuWrapper: {
    marginRight: theme.spacing(2),
  },
  subMenuIcon: {
    height: 14,
    width: 14,
  },
}));

export default function NavItem({ label, to, icon, active, background, open, hasSubMenu, expanded, onClick, subMenu }) {
  const classes = navItemStyles({ active, background, hasSubMenu, open, subMenu, expanded });
  return (
    <ListItem
      button
      component={to ? Link : 'div'}
      to={to ? to : undefined}
      onClick={onClick}
      className={classes.listItem}
    >
      <Tooltip title={label} placement="right">
        <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
      </Tooltip>
      {hasSubMenu &&
        !open &&
        (expanded ? (
          <Box className={classes.subMenuWrapper}>
            <ChevronUp className={classes.subMenuIcon} />
          </Box>
        ) : (
          <Box className={classes.subMenuWrapper}>
            <ChevronDown className={classes.subMenuIcon} />
          </Box>
        ))}
      {label && (
        <ListItemText
          classes={{ primary: classes.listItemText }}
          primary={<Trans i18nKey={label.toLowerCase()}>{label}</Trans>}
        />
      )}
      {hasSubMenu &&
        open &&
        (expanded ? (
          <Box className={classes.subMenuWrapper}>
            <ChevronUp className={classes.subMenuIcon} />
          </Box>
        ) : (
          <Box className={classes.subMenuWrapper}>
            <ChevronDown className={classes.subMenuIcon} />
          </Box>
        ))}
    </ListItem>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  icon: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  active: PropTypes.bool,
  background: PropTypes.object,
  open: PropTypes.bool,
  hasSubMenu: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  handleSideNav: PropTypes.func,
  subMenu: PropTypes.bool,
};

NavItem.defaultProps = {
  to: undefined,
  active: false,
  background: blue,
  open: false,
  hasSubMenu: false,
  expanded: false,
  onClick: () => {},
  handleSideNav: () => {},
  subMenu: false,
};
