import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {NavBar} from "../components/NavBar";
import sample from '/home/vitalii/TileInstallation/tile-installation-landing/client/src/Video/sample.mp4';
import {Head} from "../components/Header/Head";
import {ContactUsInfo} from "../components/ContactUsInfo";
import {Email} from "../components/Email";

const useStyles = makeStyles((theme) => ({
    head: {
        maxWidth:'100%',
        height:'100px',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Gallery.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    navBarPages: {
        margin: '0 0 0 530px',
    },
    content: {
        // marginTop: '-21px',
        background: 'rgba(0, 0, 0, 0.5)',
        minWidth: '100%',
        minHeight: '100%',
        // position: 'static',
        position: 'fixed',
    },
    videoTag: {
        zIndex: '-1',
        position: 'fixed',
        // position: 'absolute',
        opacity: '50%',
        minWidth: '100%',
        minHeight: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
    },

    contactUs: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth:'100%',
        backgroundColor: '#ebebeb',
        padding: '3%',
    },

}));


// export const AboutUs = () => {
//     const classes = useStyles();
//     return (
//         <Fragment>
//             <div className={classes.head}>
//                 <Head/>
//             </div>
//
//
//             <div className={classes.content}>
//                 <video className={classes.videoTag} autoPlay loop muted>
//                     <source src={sample} type='video/mp4' />
//                 </video>
//                     <div className={classes.text}>
//                         <h1>Our Company</h1>
//                         <p>Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque
//                             expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui
//                             nemore latine molestiae, ad mutat oblique delicatissimi pro.Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat phaedrum te duo, eum cu recteque
//                             expetendis neglegentur. Cu mentitum maiestatis persequeris pro, pri ponderum tractatos ei. Id qui
//                             nemore latine molestiae, ad mutat oblique delicatissimi pro.</p>
//                     </div>
//                 </div>
//         </Fragment>
//     )
// };


export const AboutUs = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.head}>
                <Head/>
            </div>
            <div className={classes.content77777777}>
                <video className={classes.videoTag} autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
            </div>

        </Fragment>
    )
};

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video
