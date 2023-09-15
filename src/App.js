import React from 'react';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import './index.css';

// ye bootstrap js or css k lye h
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// ye jo comment hui h js bootstrap wo sahi ni h stackoverflow se sahi kren
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

// yhn m n pehlr {Switch,Route} likha tha usy error arha tha ye is trh jo ab likha wo sahi method h
// import { BrowserRouter as  Routes, Route} from 'react-router-dom';
import { Routes ,Route, } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';


 import './App.css';



function App () {
  return (
   
       <>
      {/* // agr navbar ko routes k under krdia to b error ana dropdown m is lye use ni kr pa ri kun k m n javascript ka use ni kia h is k lye mujhe import bootstrap jo kia h uper us m js dalna pry ga changes krni pry gi */}
      <Navbar/>
    
    {/* // Switch ni aye ga yhn kun k react dom ka 6 version 5.2.0-beta1 m chnges ho chuki hen or switch ki jga routes ne ly li h is link se dykhynhttps://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom */}
     
     <Routes>
      
      
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/> 
          
          {/* Navigate is lye likh rhy k agr koi hmari website p aky local 300 k bd kuch ajeeb ajeeb likhy tb b usy home ka page jo hum ne default p lgya hua wohi dikhy */}
          {/* Navigate k jo ap ko nechy 2 3 method dikh rhy wo ni hen sahi jo "*" wala jo comment nhi h bs wo sahi h */}
          {/* <Navigate replace to="/"/>     
          <Navigate replace to='/' /> */}
           {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
           
           <Route path="*" element={<Navigate to ='/' />}/>
          </Routes>
          
    
     </>
  );
};

export default App;
