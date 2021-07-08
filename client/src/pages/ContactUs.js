import React, {Fragment} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../components/NavBar";
import { Email } from '../components/Email';
import { ContactUsInfo } from '../components/ContactUsInfo';
import {Head} from "../components/Header/Head";

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
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth:'100%',
        backgroundColor: '#ebebeb',
        padding: '3%',
    },
}));


export const ContactUs = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.head}>
                <Head/>
            </div>

            <div className={classes.contactUs}>
                <ContactUsInfo/>
                <Email/>
            </div>
        </Fragment>
    )
};


//https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_responsive
