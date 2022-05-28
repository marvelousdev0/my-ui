import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const contentStyles = makeStyles((theme) => ({
  content: {
    width: '100%',
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(10),
  },
  toolbar: {
    height: 104,
  },
}));

function Content({ open, children }) {
  const classes = contentStyles();
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </div>
    </SimpleBar>
  );
}

export default Content;
