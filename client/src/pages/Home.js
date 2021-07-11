import Main from "../components/Main";
import PlaceToVisit from "../components/PlaceToVisit";
import React, {Fragment} from "react";
import {CssBaseline} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Styled from "styled-components";

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

    const StyledD = Styled.div`
            @media screen and (max-width: 768px),
                   screen and (max-height: 630px) {
                          padding-top: 70%;
                    }
           @media screen and (max-width: 414px),
                   screen and (max-height: 736px) {
                          padding-top: 40%;
                    }
             @media only screen and (device-width: 768px)  {
                          margin-top: -25%;
                    }
              @media only screen and (device-width: 1024px) {
                          margin-top: -35%;
                    }
             
    `;

    return (
        <Fragment>
            <div className={classes.root}>
             <CssBaseline />
            <Main />
                <StyledD>
                    <PlaceToVisit />
                </StyledD>
            </div>
        </Fragment>
    )
};

// @media screen and (max-width: 1024px),
// screen and (max-height: 1366px) {
//     margin-top: -35%;
//     align-content: space-between;
//
//
//
// }


// @media screen and (max-width: 768px),
// screen and (max-height: 630px) {
//     padding-top: 70%;
// }
// @media screen and (max-width: 768px),
// screen and (max-height: 665px) {
//     padding-top: 60%;
// }
