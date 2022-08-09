import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App'
import Home from "./Home";
import Collserola from "./Collserola";
import Vallvidrera from "./Vallvidrera";
import P3 from "./P3";
import NotFound from "./P404";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/Collserola" element={<Collserola />} />
          <Route path="/Vallvidrera" element={<Vallvidrera />} />
          <Route path="/p3" element={<P3 />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
