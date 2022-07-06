import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import IPhone from './components/IPhone/IPhone';



function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Body/>
         <IPhone/>
    </BrowserRouter>
  
   
  )
}

export default App
