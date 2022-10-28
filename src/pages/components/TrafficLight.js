import React, {useState, useEffect} from "react";

function TrafficLight(state){
  if(state===1){//안정
    return(
      <div style={{display: "flex", width: "1000px", height: "300px", margin: "0 auto", display: 'flex', flexDirection: 'row'}}>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "green", margin: "auto"}}></div>
      </div>
    )
  }
  else if(state===2){//경고 자세
    return(
      <div style={{display: "flex", width: "1000px", height: "300px", margin: "0 auto", display: 'flex', flexDirection: 'row'}}>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "yellow", margin: "auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
      </div>
    )
  }
  else{//위험 자세
    return(
      <div style={{display: "flex", width: "1000px", height: "300px", margin: "0 auto", display: 'flex', flexDirection: 'row'}}>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "red", margin: "auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background: "gray", margin: "auto"}}></div>
      </div>
    )
  }
  
}

export default TrafficLight;