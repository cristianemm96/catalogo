import React from "react";
import "./style.css";

const Spinner = () => {
  return (
    <div style={{marginTop:"20vh"}} >
        <div className="lds-dual-ring"></div>
    </div>
    
  );
};

export default Spinner;
