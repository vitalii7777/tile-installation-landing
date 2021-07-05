import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  navLink: {
      textDecoration: 'none'
  }
}));

export default function({isWindowPosition=true}) {
  const classes = useStyles();
  const checked = isWindowPosition ? useWindowPosition('header') : true;


  return (
    <div className={classes.root} id="place-to-visit">

      <NavLink to="/bathrooms" className={classes.navLink}>
        <ImageCard place={places[0]} checked={checked} />
      </NavLink>

      <NavLink to="/floors"  className={classes.navLink}>
        <ImageCard place={places[1]} checked={checked} />
      </NavLink>

      <NavLink to="/kitchens"  className={classes.navLink}>
        <ImageCard place={places[2]} checked={checked} />
      </NavLink>

      <NavLink to="/fireplaces"  className={classes.navLink}>
        <ImageCard place={places[3]} checked={checked} />
      </NavLink>
    </div>
  );
}
