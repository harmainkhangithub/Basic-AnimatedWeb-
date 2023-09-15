import React from 'react';
import { NavLink } from 'react-router-dom';
import webs from "../src/images/business gif.gif";
import Common from './Common';

const About = () => {
  return (
    <>
    {/* props ka name pass kia h visit ye h k agr m button p click krun to wo mujhe khn visit karwae ga */}
    <Common name="Welcome About Page" imgsrc={webs} visit="/contact" btname="Contact Now"/>
    </>
  );
};
export default About;
