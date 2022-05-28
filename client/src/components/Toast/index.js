import React from 'react';
import { toast } from 'react-toastify';
import { Typography, Box } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { green, red, orange, blue } from '@mui/material/colors';
import { CheckCircle } from '@styled-icons/feather/CheckCircle';
import { Info } from '@styled-icons/feather/Info';
import { AlertTriangle } from '@styled-icons/feather/AlertTriangle';
import { XCircle } from '@styled-icons/feather/XCircle';
import { Bell } from '@styled-icons/feather/Bell';
import './style.css';

const toastStyles = makeStyles((theme) => ({
  root: ({ type }) => ({
    backgroundColor:
      type === 'success'
        ? green[100]
        : type === 'error'
        ? red[100]
        : type === 'warning'
        ? orange[100]
        : type === 'info'
        ? blue[100]
        : theme.palette.background.paper,
    padding: theme.spacing(2, 3),
    color:
      type === 'success'
        ? green[800]
        : type === 'error'
        ? red[800]
        : type === 'warning'
        ? orange[800]
        : type === 'info'
        ? blue[800]
        : theme.palette.text.secondary,
  }),
  iconWrapper: {
    marginRight: theme.spacing(3),
  },
  icon: {
    height: 24,
    width: 24,
  },
  header: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold,
  },
  message: {
    fontSize: theme.typography.pxToRem(14),
  },
  progressBar: ({ type }) => ({
    background:
      type === 'success'
        ? green[800]
        : type === 'error'
        ? red[800]
        : type === 'warning'
        ? orange[800]
        : type === 'info'
        ? blue[800]
        : theme.palette.text.secondary,
  }),
}));

function Toast({ type, header, message }) {
  const classes = toastStyles({ type });
  return (
    <Box type={type} className={classes.root}>
      <Box width="100%" display="flex" alignItems="center">
        <div className={classes.iconWrapper}>
          {type === 'success' ? (
            <CheckCircle className={classes.icon} />
          ) : type === 'error' ? (
            <XCircle className={classes.icon} />
          ) : type === 'warning' ? (
            <AlertTriangle className={classes.icon} />
          ) : type === 'info' ? (
            <Info className={classes.icon} />
          ) : (
            <Bell className={classes.icon} />
          )}
        </div>
        <Box>
          {header && <Typography className={classes.header}>{header}</Typography>}
          {message && <Typography className={classes.message}>{message}</Typography>}
        </Box>
      </Box>
    </Box>
  );
}

export default {
  success: ({ header, message, config: { autoClose = true } = {} }) => {
    const toastId = toast.success(<Toast type="success" header={header} message={message} />, {
      autoClose,
      progressClassName: 'toast-progress-bar-success',
    });
    return toastId;
  },
  error: ({ header, message, config: { autoClose = true } = {} }) => {
    const toastId = toast.error(<Toast type="error" header={header} message={message} />, {
      autoClose,
      progressClassName: 'toast-progress-bar-error',
    });
    return toastId;
  },
  warning: ({ header, message, config: { autoClose = true } = {} }) => {
    const toastId = toast.warning(<Toast type="warning" header={header} message={message} />, {
      autoClose,
      progressClassName: 'toast-progress-bar-warning',
    });
    return toastId;
  },
  info: ({ header, message, config: { autoClose = true } = {} }) => {
    const toastId = toast.info(<Toast type="info" header={header} message={message} />, {
      autoClose,
      progressClassName: 'toast-progress-bar-info',
    });
    return toastId;
  },
  default: ({ header, message, config: { autoClose = true } = {} }) => {
    const toastId = toast(<Toast type="default" header={header} message={message} />, {
      autoClose,
      progressClassName: 'toast-progress-bar-default',
    });
    return toastId;
  },
  dismiss: (toastId) => {
    if (toastId) toast.dismiss(toastId);
    else toast.dismiss();
  },
};
