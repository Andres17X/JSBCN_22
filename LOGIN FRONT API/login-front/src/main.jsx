import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

import './index.css'
import App from './App'


import Inici from "./elements/Inici";
import Secret from "./elements/Secret";
import Open from "./elements/Open";
import NouArticle from "./elements/NouArticle";
import EditArticle from "./elements/EditArticle";
import LlistaArticles from "./elements/LlistaArticles";
import LlistaFormats from "./elements/LlistaFormats";
import NouFormat from "./elements/NouFormat";
import EditaFormat from "./elements/EditaFormat";



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inici />} />
        <Route path="nou_article" element={<NouArticle />} />
        <Route path="edit_article/:id" element={<EditArticle />} />
        <Route path="edit_format/:id" element={<EditaFormat />} />
        <Route path="llista" element={<LlistaArticles />} />
        <Route path="formats" element={<LlistaFormats />} />
        <Route path="nouformat" element={<NouFormat />} />
        <Route path="secret" element={<Secret />} />
        <Route path="open" element={<Open />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
