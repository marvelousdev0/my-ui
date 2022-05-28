import React from 'react';
import Color from 'color';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/material';

const useGridStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 432,
    overflowX: 'scroll',
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      padding: theme.spacing(4),
    },
  },
}));

const useStyles = makeStyles(() => ({
  cardWrapper: {
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    cursor: 'pointer',
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 10px 15px -3px ${Color(color).rotate(-12).darken(0.2).fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Montserrat Subrayada',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Lato',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardMedia image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h2'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

const Gamer = () => {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: '#203f52' });
  const styles2 = useStyles({ color: '#4d137f' });
  const styles3 = useStyles({ color: '#ff9900' });
  const styles4 = useStyles({ color: '#34241e' });
  return (
    <Box className={gridStyles.root}>
      <CustomCard
        classes={styles}
        title={'Dota 2'}
        subtitle={'Be a Legend!'}
        image={'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png'}
      />
      <CustomCard
        classes={styles2}
        title={'Fortnite'}
        subtitle={'Time to choose side!'}
        image={'https://allyourgames.com/wp-content/uploads/2019/09/10.40.png'}
      />
      <CustomCard
        classes={styles3}
        title={'Overwatch'}
        subtitle={'What are you waiting?'}
        image={'https://images5.alphacoders.com/690/thumb-1920-690653.png'}
      />
      <CustomCard
        classes={styles4}
        title={'PUBG'}
        subtitle={'Are you ready?'}
        image={
          'https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan'
        }
      />
    </Box>
  );
};
// hide-start
Gamer.metadata = {
  title: 'Solid Game',
  path: 'components/card/solidGame',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Tue Jun 02 2020',
  stylesUrl: '',
  frameProps: {
    bgcolor: '#f7f7fe',
  }, // props that applied to Box in grid view
  size: 'huge', // can be 'large' | 'huge' for grid size
  files: [],
};
// hide-end

export default Gamer;
