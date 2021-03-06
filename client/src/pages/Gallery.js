import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PlaceToVisit from "../components/PlaceToVisit";
import { Head } from "../components/Header/Head";


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
        backgroundColor: '#ebebeb',
    }
}));


export const Gallery = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.head}>
                <Head/>
            </div>
            <div className={classes.content}>
                <PlaceToVisit isWindowPosition={false}/>
            </div>
        </Fragment>
    )
};
