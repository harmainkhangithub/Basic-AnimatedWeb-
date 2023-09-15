// about or home page ka code same h to hum props pass kr k component isCommon Component.jsx ko cal krlen gy
import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/comp_2_4.gif";

// common p props ko pany k lye is common component p props ko lany k lyecommon(props) 
const Common=(props)=> {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container nav-bg">
        <div className="row">
          <div className="col-12 max-auto">
            {/* ye dubara row is lye kia kunk dussri taraf image aye usi k necy na aye */}
            <div className="row">
            {/* ye line h responsiveness k lye nechy wali */}
         
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
         <h1>
            {/* props.name yahn pas krna */}
            {props.name}
          {/* strong tag is lye taky highlight ho ye ab */}
          {/* ab yahnse welcome about page hata dia or props pas kren gy or wo common component m mily ga */}
          <strong className="brand-name"> HarmainTech</strong>
         </h1 >
         {/* har jaga se margin */}
         <h2 className="my-3">
          we are the team of talented developers making websites
         </h2>
         {/* top se margin */}
         <div className="mt-3">
          {/* anchor tag button k lye use kar rhy or anchor tag ko ek class di button wali taky ye button ki trh lgy or btn m service is lye dya NavLinkk sath kun k get started p click ho to services waly page p chly jayen*/}
          <NavLink to={props.visit} className="btn-get-started">
          {props.btname}
          </NavLink>
         </div>
          </div>
           
           
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            {/* imge fluid wali class jo animation h usi k lye h wo home is lye likha kun k ye home m h */}
            {/* <img src={web} className="img-fluid-animated" alt="home img"></img> */}

             <img className="container img-fluid-animated" src={props.imgsrc} alt="home img"/>
            
             
             
             </div>

             
          </div>
          </div>
          </div>
        </div>
    
     
    </section>
      
    </>
  );
};
export default Common;
