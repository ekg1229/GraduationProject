import React, {useState, useEffect} from "react";
import TrafficLight from "./TrafficLight";
import axios from 'axios';

/*
export const Light = styled(Link)`
@media screen and (max-width: 768px) {
display: flex;
align-items: center;
padding: 0 2rem;
  flex-direction: column;
}`
*/

function Light(){
  const [color, setColor] = useState([ //신호등 색상 배열
    {id:'1', value1:"green", value2:"gray", value3:"gray"}, //안정
    {id:'2', value1:"gray", value2:"yellow", value3:"gray"}, //경고
    {id:'3', value1:"gray", value2:"gray", value3:"red"} //위험
  ]); //신호등 색상 배열

  let [data, setData] = useState([]); //axios data 저장

  useEffect(()=>{
    //1초마다 서버에 데이터 요청(POST)
    let interval = setInterval(()=>axios.post("/api/graph/liveState").then(res=>{
      console.log(res.data); //data
      setData(res.data);
      console.log("success"); //success
    }), 1000)

    setTimeout(()=>{
      clearInterval(interval);
    }, 10000);
    /*
    .catch(res=>{
      console.log(res); //error
    })
    */
  }, []);
  
  return(
      <TrafficLight/>
  );
}

export default Light;