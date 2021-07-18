import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import sample from '/home/vitalii/TileInstallation/tile-installation-landing/client/src/Video/sample.mp4';
import sample from '../Video/sample.mp4';

import { Head } from '../components/Header/Head';

const useStyles = makeStyles(theme => ({
  head: {
    maxWidth: '100%',
    height: '100px',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Gallery.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  navBarPages: {
    margin: '0 0 0 530px',
  },
  content: {
    background: 'rgba(0, 0, 0, 0.2)',
    minWidth: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    zIndex: '-5',
  },
  videoTag: {
    zIndex: '-1',
    position: 'fixed',
    opacity: '50%',
    minWidth: '100%',
    minHeight: '100%',
  },
  companyInfo: {
    display: 'block',
    padding: '30px',
    fontFamily: 'Nunito',
    fontSize: '1.2em',
  },
  text: {
    fontWeight: '600',
  },
}));

export const AboutUs = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.head}>
        <Head />
      </div>
      <div className={classes.content}>
        <video className={classes.videoTag} autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
      <div className={classes.companyInfo}>
        <h1>Our Company</h1>
        <div className={classes.text}>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur. Cu mentitum
          maiestatis persequeris pro, pri ponderum tractatos ei. Id qui
          expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri
          ponderum tractatos ei. Id qui nemore latine molestiae, ad mutat
          oblique delicatissimi pro.
        </div>
      </div>
    </Fragment>
  );
};

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video
