
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Clients from './screens/Clients';
import ClientDetails from './screens/ClientDetails';
import Interactions from './screens/Interactions';
import Notifications from './screens/Notifications';
import Settings from './screens/Settings';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client-details" element={<ClientDetails />} />
        <Route path="/interactions" element={<Interactions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
