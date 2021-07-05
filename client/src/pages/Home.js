import Main from "../components/Main";
import PlaceToVisit from "../components/PlaceToVisit";
import React, {Fragment} from "react";
import {CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        // backgroundSize: 'contain',
        backgroundSize: 'auto',
    },
}));


export const Home = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.root}>
             <CssBaseline />
            <Main />
            <PlaceToVisit />
            </div>
        </Fragment>
    )
};
