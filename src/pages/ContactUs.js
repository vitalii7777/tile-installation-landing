import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {NavBar} from "../components/NavBar";

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
    contactUs: {

    }
}));


export const ContactUs = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.head}>
            </div>
            <div className={classes.nav2}>
                <NavBar/>
            </div>


            <div className={classes.contactUs}>
                Contact Info Should Be here
            </div>
        </Fragment>
    )
};
