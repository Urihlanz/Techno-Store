import React from 'react';
import { Navigate, Route, Routes as GroupRoutes } from 'react-router-dom';

import Bag from './pages/Bag';
import Layout from './pages/Layout';
import Store from './pages/Store';

const Routes: React.FC = () => (
  <GroupRoutes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Store />}></Route>
      <Route path='/bag' element={<Bag />}></Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  </GroupRoutes>
);

export default Routes;
