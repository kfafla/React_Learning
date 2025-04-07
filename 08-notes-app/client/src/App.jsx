import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './store';

const App = () => {
  return (
    <Router>
      <AppRoutes></AppRoutes>
    </Router>
  );
};

export default App;