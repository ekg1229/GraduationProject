import React, {useState, useEffect} from "react";
import TrafficLight from "./TrafficLight";
import axios from 'axios';
import LightError from "./Light_error";
import Result_1 from "../components/Result_1";
import useDidMountEffect from "./useDidMountEffect";

//실시간 척추 상태 신호등 데이터 처리
function Light(){
  const [data, setData] = useState([]); //axios data 저장(JSON)

  //자세 상태를 나타내는 state변수
  const [state, setState] = useState("");

  //데이터가 정상적으로 들어오는지
  const [dataCheck, setDataCheck] = useState(true);

  useEffect(()=>{
    //서버에 데이터 요청(POST)  
    /*
    async function postData(){
      try{
      const response = await axios.post("/api/graph/liveState");
      console.log("res.data : " + response);
      setData(response.data);
      console.log("adfasdfasdfas",data);
      console.log("success!"); //success
      } 
      catch(error){
        console.log(error);
      }    
    }
    */
    
    const postData = () => {axios.post("/api/graph/liveState")
      .then(res => {
        console.log("res.data: ", res.data);
        setData(res.data);
        console.log("success!"); //success
      })
      .catch(res=>{
        console.log(res); //error
        console.log("error!"); //error
      })
    }

    //1초마다 서버에 데이터 요청
    let interval = setInterval(()=>{
      postData();
    }, 1000);
    
    //언마운트
    return () => {
      console.log("axios 요청 중단");
      clearInterval(interval);
    }
  }, []);

  useDidMountEffect(()=>{
    console.log("data4: "+ JSON.stringify(data));

    //데이터 처리
    const parser = () =>{
      //데이터 처리 시작
      console.log("data processing start!");

      //JSON data
      let avgBackforth = parseFloat(data.avgBackforth); //허리 앞뒤(0:정상, 1:경고, 2:위험)
      console.log("avgBackforth: " + avgBackforth);
      let avgLeft = parseFloat(data.avgLeft); //허리 좌(-2:왼쪽 치우침, -1:왼쪽 조금 치우침, 0:정상)
      console.log("avgLeft: " + avgLeft);
      let avgRight = parseFloat(data.avgRight); //허리 우(0:정상, 1:오른쪽 약간 치우침, 2:오른쪽 치우침)
      console.log("avgRight: " + avgRight);
      let avgAccuracy = parseFloat(data.avgAccuracy); //허리 움직임(0:움직임 없음, 1:움직임 조금 있음 2:매우 움직임)
      console.log("avgAccuracy: " + avgAccuracy);

      //데이터 없을 시, 잘못된 데이터
      if(data==null || data==undefined) setDataCheck(false);
      console.log("dataCheck: " + dataCheck);

      //result
      let result = (avgBackforth + Math.abs(avgLeft) + Math.abs(avgRight) + avgAccuracy)/4;
      console.log("result: " + result);
      // let Backforth = false;
      // let LeftRight = false;
      // let Accuracy = false;

      //data processing logic
      if(result>=0 && result<=0.7) setState("1"); //안정
      else if(result>0.7 && result<=1.4) setState("2"); //경고
      else setState("3"); //위험
      console.log("state:" + state);

      /*
      //data processing logic
      if(avgBackforth>=0 && avgBackforth<=0.5) Backforth = true;
      console.log("Backforth: " + Backforth);
      
      if((avgLeft>=0 && avgLeft<=0.5) && (avgRight>=0 && avgRight<=0.5)) LeftRight = true;
      if(isNaN(avgRight) && (avgLeft>=0 && avgLeft<=0.5)) LeftRight = true;
      if(isNaN(avgLeft) && (avgRight>=0 && avgRight<=0.5)) LeftRight = true;
      console.log("LeftRight: " + LeftRight);
      
      if(avgAccuracy>=0 && avgAccuracy<=0.5) Accuracy = true;
      console.log("Accuracy: " + Accuracy);

      //자세 상태에 따른 setState
      if(Backforth && LeftRight && Accuracy) setState("1"); //안정
      else if(!Backforth && !LeftRight & !Accuracy) setState("3"); //위험
      else setState("2"); //경고
      console.log("state:" + state);
      */
    }
    parser();
  }, [data])

  return(
    <>
      {dataCheck ? (//데이터 들어올 때
        <div>
          <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", height: "350px", margin: "0 auto"}}>
            <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "1000px", height: "300px", margin: "0 auto", borderRadius: "500px", background: "black", boxShadow: "5px 5px"}}>
              <TrafficLight state={state}/>
            </div>
          </div>
          <div className="result" style={{display: "flex", justifyContent: "center", alignItems: "center", width:"1000px", height:"250px", margin: "0 auto"}}>
            <Result_1 state={state}/>
          </div>
        </div>
      ):(//데이터 안 들어올 때
        <div>
          <LightError/>
          <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "50%", height: "350px", margin: "0 auto"}}>
            <div className="mb-4" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "1000px", height: "300px", margin: "0 auto", borderRadius: "500px", background: "black", boxShadow: "5px 5px"}}>
              <TrafficLight state={state}/>
            </div>
          </div>
          <div className="result" style={{display: "flex", justifyContent: "center", alignItems: "center", width:"1000px", height:"250px", margin: "0 auto"}}>
            <Result_1 state={state}/>
          </div>
        </div>
      )
      }
    </>
  );
}

export default Light;