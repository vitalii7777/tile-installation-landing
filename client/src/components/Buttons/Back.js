import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import './Back.css';


const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito',
        cursor: 'pointer',
    }
}));

export const BackBtn = () => {
    const classes = useStyles();

    return (
        <div id='backBlock'>
        <ArrowBackIcon className={classes.main} id='backBtn'/>
        </div>
        )

}
