import React from "react";
import { Switch, Route } from "react-router-dom"
import { BathroomsAndShowers } from './components/Gallery/BathroomsAndShowers';
import { Floors } from './components/Gallery/Floors';
import { Kitchens } from './components/Gallery/Kitchens';
import { Fireplaces } from './components/Gallery/Fireplaces';
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Gallery } from "./pages/Gallery";
import { ContactUs } from "./pages/ContactUs";

export const useRoutes = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/about-us" exact>
                <AboutUs/>
            </Route>
            <Route path="/gallery" exact>
                <Gallery/>
            </Route>
            <Route path="/contactUs" exact>
                <ContactUs/>
            </Route>
            <Route path="/bathrooms" exact>
                <BathroomsAndShowers/>
            </Route>
            <Route path="/floors">
                <Floors/>
            </Route>
            <Route path="/kitchens" exact>
                <Kitchens/>
            </Route>
            <Route path="/fireplaces" exact>
                <Fireplaces/>
            </Route>
        </Switch>
    )
};
