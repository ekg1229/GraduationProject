import React, {useState, useEffect} from "react";
import TrafficLight from "./TrafficLight";
import axios from 'axios';
import LightError from "./Light_error";
import Result_1 from "../components/Result_1";

//실시간 척추 상태 신호등 데이터 처리
function Light(){
  let [data, setData] = useState([]); //axios data 저장(JSON)
  const [state, setState] = useState(""); //자세 상태를 나타내는 state변수
  
  useEffect(()=>{
    //서버에 데이터 요청(POST)  
    const func = () => {axios.post("/api/graph/liveState")
      .then(res=>{
        console.log(res.data); //data
        setData(JSON.stringify(res.data));
        console.log("success!"); //success
      })
      .catch(res=>{
        console.log("error!"); //error
        console.log(res); //error
        //데이터 핸들링X -> 음영처리&안내문구
        return(
          <LightError/>
        );
      })
    }

    //1초마다 서버에 데이터 요청
    let interval = setInterval(()=>func(), 1000);

    //언마운트
    return () => {
        console.log("axios 요청 중단");
        clearInterval(interval);
    }
  }, []);

  //데이터 처리
  console.log("data processing start");

  if(data.length > 0){
    //JSON data
    let count = data.count;
    let avgBackforth = data.avgBackforth; //허리 앞뒤(0:정상, 1:경고, 2:위험)
    let avgLeft = data.avgLeft; //허리 좌우(-2:왼쪽 치우침, -1:왼쪽 조금 치우침, 0:정상, 1:오른쪽 약간 치우침, 2:오른쪽 치우침)
    let avgRight = data.avgRight; //위와 동일
    let avgAccuracy = data.avgAccuracy; //허리 움직임(0:움직임 없음, 1:움직임 조금 있음 2:매우 움직임)

    //result
    let Backforth = false;
    let LeftRight = false;
    let Accuracy = false;

    //data processing logic
    if(avgBackforth>=0 && avgBackforth<=0.5) Backforth = true;
    if((avgLeft>=0 && avgLeft<=0.5) || (avgRight>=0 && avgRight<=0.5)) LeftRight = true;
    if(avgAccuracy>=0 && avgAccuracy<=0.5) Accuracy = true;

    //setState
    if(Backforth && LeftRight && Accuracy) setState("1"); //안정
    else if(Backforth || LeftRight || Accuracy) setState("3"); //위험
    else setState("2"); //경고
  }

  return(
    <>
      <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", height: "350px", margin: "0 auto"}}>
        <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "1000px", height: "300px", margin: "0 auto", borderRadius: "500px", background: "black", boxShadow: "5px 5px"}}>
          <TrafficLight state={state}/>
        </div>
      </div>
      <div className="result" style={{display: "flex", justifyContent: "center", alignItems: "center", width:"1000px", height:"250px", margin: "0 auto"}}>
        <Result_1 state={state}/>
      </div>
    </>
  );
}

export default Light;