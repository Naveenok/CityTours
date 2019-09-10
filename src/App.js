import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import Tour from './components/Tour/Tour';


function App() {
  return (
    <div>
     <Navbar/>
     <TourList/>     
    </div>
  );
}

export default App;
