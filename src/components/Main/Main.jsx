import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Landings from './Landings';
import Mapa from './Landings/Mapa';
import List from './Landings/List';
import Neas from './Neas';
import NeasList from './Neas/NeasList';

function Main () {
    return (
      <main>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Landings/>} path='/landings'/>
          <Route element={<Mapa/>} path='/landings/mapa'/>
          <Route element={<List/>} path='/landings/list'/>
          <Route element={<Neas/>} path='/neas'/>
          <Route element={<NeasList/>} path='/landings/list'/>
        </Routes>
      </main>
    )
}

export default Main;
