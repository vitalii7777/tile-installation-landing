import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {NavBar} from "../components/NavBar";
import {Toolbar} from "@material-ui/core";

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


export const AboutUs = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.head}>
            </div>
            <div className={classes.nav2}>
                <NavBar/>
            </div>


            <div className={classes.contactUs}>
                READ MORE ABOUT OUR COMPANY
                We are specialized in the production of ceramic tiles. BeTiles is technologically the most contemporary factory.
            </div>
        </Fragment>
    )
};
