import './App.css';
import 'tw-elements';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import {
  Routes,
  Route,
 
} from "react-router-dom";
import Query from './components/Query';
import GraphicData from './components/GraphicData';


function App() {
  
 
  return (
    <>
    <div className="flex">
      <Navbar/>
        {/* <HomePage/> */}

        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/query" element={<Query />} />
        <Route path="/graphic" element={<GraphicData />} />
      </Routes>

    </div>

    </>
  );
}

export default App;
