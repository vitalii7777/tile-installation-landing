import React from 'react';
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom"
import './index.css';

export default function App() {
  const routes = useRoutes();

  return (
    <div>
        <BrowserRouter>
              {routes}
        </BrowserRouter>
    </div>
  );
}

//https://www.youtube.com/watch?v=rK0Lz8x7npA
//https://openbase.com/js/react-image-gallery
//https://material-ui.com/ru/components/app-bar/
