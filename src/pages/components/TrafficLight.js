import React from "react";

//상태에 따라 신호등 제어
function TrafficLight(props){
  const state = props.state;

  if(state==="1"){//안정
    return(
      <div style={{display:"flex", width:"1000px", height:"300px", margin:"0 auto", flexDirection: 'row'}}>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"#510000", margin:"auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"#514E00", margin:"auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"green", margin:"auto"}}></div>
      </div>
    )
  }
  else if(state==="2"){//경고
    return(
      <div style={{display:"flex", width:"1000px", height:"300px", margin:"0 auto", flexDirection: 'row'}}>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"#510000", margin:"auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"yellow", margin:"auto"}}></div>
        <div style={{id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"#0B5100", margin:"auto"}}></div>
      </div>
    )
  }
  else{//위험
    return(
      <div style={{display:"flex", width:"1000px", height:"300px", margin:"0 auto", flexDirection: 'row'}}>
        <div style={{display: "absoulte", id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"red", margin:"auto"}}></div>
        <div style={{display: "absoulte", id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"#514E00", margin:"auto"}}></div>
        <div style={{display: "absoulte", id:"circle", width:"250px", height:"250px", borderRadius:"50%", background:"#0B5100", margin:"auto"}}></div>
      </div>
    )
  }
  
}

export default TrafficLight;