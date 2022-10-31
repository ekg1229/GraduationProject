import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import axios from "axios";
import useDidMountEffect from "./useDidMountEffect"

//사용통계_사용 분석
function StatChart2(){
  const [rawdata, setRawData] = useState([]); //axios data 저장(JSON)
  const [loading, setLoading] = useState(false);
  const [datasetData, setDatasetData] = useState();
  const [datasetAxisX, setDatasetAxisX] = useState();
  
  useEffect(()=>{
    const postData = () =>{axios.post("/api/graph/shape")
      .then(res => {
        //console.log("data': " + res.data);
        setRawData(res.data);
        setLoading(true);
        //console.log("success!"); //success
      })
      .catch(res => {
        //console.log(res);
        //console.log("error!"); //error
      })
    }
    //서버에 데이터 요청
    postData();

    //언마운트
    return () =>{
      //console.log("unmount");
    }
  }, []);

  useDidMountEffect(() => {
    //console.log("data': "+ JSON.stringify(rawdata));

    //데이터 처리
    const parser = () =>{
      //데이터 처리 시작
      //console.log("data' processing start!!");

      //JSON data
      let percentage = rawdata.percentage;
      percentage = percentage.map(i=>i*100);
      //console.log("percentage: " + percentage);
      setDatasetData(percentage); //바른 자세 비율

      let axisX = rawdata.axisX;
      //console.log("axisX: " + axisX);
      setDatasetAxisX(axisX); //X축(날짜)
    }

    parser();

  }, [rawdata])

  //차트 데이터
  const data = {
    labels: datasetAxisX,
    datasets: [
        {
            label: '바른 자세(%)',
            data: datasetData,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
  };
  
  //차트 옵션
  const options={
    plugins:{
      subtitle:{
        display: true,
        color: "#000000",
        text: "올바른 자세를 한 비율(%)",
        font: {
          size: 24
        }
      }
    },
    scales:{
      x:{
        ticks: {
          minRotation: 30,
        }
      },
    }
  }
  
  return(
    <div>
      {loading ? (
      <Bar data={data} options={options}/>
      ):(
        <>
          <div style={{position: "fixed", top: "7vh", left: "0px", width: "100%", height: "100%", zIndex: "10", opacity: "0.5", backgroundColor: "rgb(0, 0, 0)"}}></div>
          <div class="spinner-border" style={{display: "flex", width: "15rem", height: "15rem", alignItems: "center", justifyContent: "center", margin: "0 auto"}} role="status">
          <span class="visually-hidden">Loading...</span>
          </div>
        </>
        )
      }
    </div>
  );
}

export default StatChart2;