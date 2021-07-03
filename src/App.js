import React from 'react';
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom"
import { Header } from './components/Header';

export default function App() {
  const routes = useRoutes();

  return (
    <div>
        <BrowserRouter>
            <Header/>
              {routes}
        </BrowserRouter>
    </div>
  );
}

//https://www.youtube.com/watch?v=rK0Lz8x7npA
//https://openbase.com/js/react-image-gallery
