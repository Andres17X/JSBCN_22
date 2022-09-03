import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App'

import Alumnes from "./elements/Alumnes";
import NouAlumne from "./elements/NouAlumne";
import EditaAlumne from "./elements/EditaAlumne";
import BorraAlumne from "./elements/BorraAlumne";
import MostraAlumne from "./elements/MostraAlumne";
import MostraEdicio from "./elements/MostraEdicio";
import Cursos from "./elements/Cursos";
import Edicions from "./elements/Edicions";
import Inici from "./elements/Inici";
import Secret from "./elements/Secret";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inici />} />
        <Route path="alumnes" element={<Alumnes />} />
        <Route path="alumnes/nou" element={<NouAlumne />} />
        <Route path="alumnes/edit/:id" element={<EditaAlumne />} />
        <Route path="alumnes/mostra/:id" element={<MostraAlumne />} />
        <Route path="edicions/mostra/:id" element={<MostraEdicio />} />
        <Route path="alumnes/borra/:id" element={<BorraAlumne />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="edicions" element={<Edicions />} />
        <Route path="secret" element={<Secret />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
