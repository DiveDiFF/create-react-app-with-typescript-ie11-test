import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CardList from './pages/CardList';
import FormList from './pages/FormList';
import Home from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form_list" element={<FormList />} />
        <Route path="/card_list" element={<CardList />} />
      </Routes>
    </BrowserRouter>
  );
}
