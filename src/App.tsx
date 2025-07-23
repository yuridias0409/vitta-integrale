import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import ServicePage from './app/servicos/ServicePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Rota dinâmica para as páginas de serviço */}
        <Route path="/servico/:serviceName" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;