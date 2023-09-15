import React from 'react';
import Card from './Card';
import Sdataarray from "./Sdataarray";
// import pic1 from "../src/images/SQA.webp";
// import pic2 from "../src/images/app.png";
// import pic3 from "../src/images/website.webp";
// import pic4 from "../src/images/video editing.png";
// import pic5 from "../src/images/graphics designing.webp";
// import pic6 from "../src/images/digital marketing.jpg";

const Service=()=> {
  return (
    <>

    <div className="my-5">
      <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 max-auto">
           
           {/* gutter-y property lgai h idhr */}
            <div className="row gy-4">
              
              {/* agr array k element ko use karna ho to react m hum map ka use krty ye curly braces m likhna kun k javascript ka part h */}
           {
            Sdataarray.map ((val,ind) => {
              return <Card key={ind} imgsrc={val.imgsrc} title={val.title}/>
            })}
         
   
            </div>
            </div>
            </div>
            </div>
          
   
      
    </>
  );
};
export default Service;