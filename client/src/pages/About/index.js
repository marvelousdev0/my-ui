import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './style.css';

export default function About() {
  return (
    <Box width="100%">
      <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Button
          endIcon={
            <svg viewBox="0 0 20 20" className="icon">
              <path d="M0 0 L10 10 L0 20" className="path" />
            </svg>
          }
        >
          Check svg
        </Button>
        <div class="inner">
          <span>i</span>
          <h1>Hey</h1>
          <p>This is an informative card that will tell you something that's... well, important!</p>
        </div>
      </div>
      <Typography paragraph>You are interested to know more!</Typography>
      <Typography paragraph align="justify">
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
    </Box>
  );
}
