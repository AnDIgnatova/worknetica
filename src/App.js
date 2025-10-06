import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Documents from './pages/documents';

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<MainLayout />} />

        {/* Страница с документами */}
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </Router>
  );
}

export default App;
