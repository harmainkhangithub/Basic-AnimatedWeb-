import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/comp_2_4.gif";
import Common from './Common';

const Home=()=> {
  return (
    <>
        <Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"/>
    </>
  );
};
export default Home;
