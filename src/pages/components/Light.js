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
  const [color, setColor] = useState([
    {id:'1', value:"gray"},
    {id:'2', value:"red"},
    {id:'3', value:"yellow"}
  ]); //신호등 색상 배열(gray, red, yellow, green)
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
    <div style={{display: "flex", width: "1000px", height: "300px", margin: "0 auto", display: 'flex', flexDirection: 'row'}}>
      {color.map((item)=>{return <TrafficLight key={item.id} color={item.color}/>})}
    </div>
  );
}

export default Light;