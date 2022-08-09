import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App'
import Home from "./Home";
import P1 from "./P1";
import P2 from "./P2";
import P3 from "./P3";
import NotFound from "./P404";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/p1" element={<P1 />} />
          <Route path="/p2" element={<P2 />} />
          <Route path="/p3" element={<P3 />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
