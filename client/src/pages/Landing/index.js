import React from 'react';
import Loadable from 'react-loadable';
import { Box, Typography } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import { landingStyles, StyledButton } from './style';
import Loading from 'components/Loading';

const Gamer = Loadable({
  loader: () => import('./components/Gamer'),
  loading: Loading,
});

function Landing() {
  const { t } = useTranslation();
  const classes = landingStyles();
  return (
    <Box className={classes.root}>
      <Typography paragraph>{t('title')}</Typography>
      <Typography paragraph component="div">
        <div>
          <Trans i18nKey="description.part1">
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div>{t('description.part2')}</div>
      </Typography>
      <StyledButton />
      <Box height={432}>
        <Gamer />
      </Box>
      <Typography paragraph align="justify" className={classes.paragraph}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
      <Typography paragraph align="justify" className={classes.paragraph}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
      <Typography paragraph align="justify" className={classes.paragraph}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
      <Typography paragraph align="justify" className={classes.paragraph}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
      <Typography paragraph align="justify" className={classes.paragraph}>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim
        diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices
        sagittis orci a.
      </Typography>
      <Typography paragraph align="justify" className={classes.paragraph}>
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

export default Landing;
