import React from "react";

function Light(){
  return(
    <div style={{display: "flex", width: "1000px", height: "300px", margin: "0 auto"}}>
      <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
      <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "yellow", margin: "auto"}}></div>
      <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
    </div>
  );
}

export default Light;