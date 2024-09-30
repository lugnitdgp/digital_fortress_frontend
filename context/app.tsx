import React from 'react';
import { MyContextProvider } from './contextapi';
import Navbar from '../components/Navbar/navbar'; 
import Rulescard from '@/components/Rulescard/rulescard';
import Home from '@/app/(home)/page';

const App: React.FC = () => {
  return (
    <MyContextProvider>
      <Navbar />
      <Rulescard></Rulescard>
      <Home></Home>
    </MyContextProvider>
  );
};

export default App;
