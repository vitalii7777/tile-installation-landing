import React, {Fragment} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../components/NavBar";
import { Email } from '../components/Email';
import { ContactUsInfo } from '../components/ContactUsInfo';

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
        justifyContent: 'space-between',
        maxWidth:'100%',
        backgroundColor: 'grey',
        padding: '2%',

    },
}));


export const ContactUs = () => {
    const classes = useStyles();
    return (
        <div  className={classes.head}>
            <div className={classes.head}>
            </div>
            <div className={classes.nav2}>
                <NavBar/>
            </div>


            <div className={classes.contactUs}>
                    <Email/>
                    <ContactUsInfo/>
            </div>
        </div>
    )
};


//https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox_responsive
