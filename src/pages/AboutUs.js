import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {NavBar} from "../components/NavBar";
import sample from '/home/vitalii/TileInstallation/tile-installation-landing/src/Video/sample.mp4';

const useStyles = makeStyles((theme) => ({
    head: {
        maxWidth:'100%',
        height:'100px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Gallery.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    nav2: {
        margin: '0 0 0 530px',
    },
    content: {
        //margin: '20px',
    },
    videoTag: {
        zIndex:'-1',
        marginTop: '-21px',
        position: 'fixed',
        opacity: '70%',
        minWidth: '100%',
        minHeight: '100%',
    },
    text: {
        margin: '0 0 0 30px',
    }

}));


export const AboutUs = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.head}>
            </div>
            <div className={classes.nav2}>
                <NavBar/>
            </div>


            <div className={classes.content}>
                <video className={classes.videoTag} autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className={classes.text}>
                    <h1>Our Company</h1>
                    <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque
                        expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui
                        nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
                </div>
                </div>

        </Fragment>
    )
};
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video
