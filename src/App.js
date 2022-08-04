import React, {useState} from 'react';

import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import {SliderData} from "./data/SliderData";
import InfoSection from "./components/InfoSection";
import { InfoData } from './data/InfoData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListUser from "./components/ListUser";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import Footer from './components/Footer';
import CarDetail from "./components/CarDetail";




function App() {
  const [isOpen, setIsOpen] = useState(false);
  const param = 'set'
  const toggle = () => {
    setIsOpen(!isOpen);
  }  

  return (
    <Router>
        <GlobalStyle/>
        <Navbar toggle={toggle} param={param}/>
        <Dropdown isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route path='/' element = {<Hero slides={SliderData}/>}></Route> 
            <Route path='/user' element = {<ListUser/>}></Route>
            <Route path='/rentals' element = {<InfoSection{...InfoData}/>}></Route>
            <Route path='/add-user' element = {<CreateUser/>} ></Route>
            <Route path='/rentals/car-detail' element = {<CarDetail slides={SliderData}/>} ></Route>
            <Route path='/rentals/car-detail/:id' element = {<CarDetail slides={SliderData}/>} ></Route>
            <Route path='/login' element = {<Login/>}></Route>
          </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
