import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import axios from "axios";
import useDidMountEffect from "./useDidMountEffect"

function StatChart(){
  const [rawdata, setRawData] = useState([]); //axios data 저장(JSON)
  const [datasetData, setDatasetData] = useState();
  const [datasetAxisX, setDatasetAxisX] = useState();

  useEffect(()=>{
    const postData = () =>{axios.post("/api/graph/usage")
      .then(res => {
        console.log("res.data: " + res.data);
        setRawData(res.data);
        console.log("success!"); //success
      })
      .catch(res => {
        console.log(res);
        console.log("error!"); //error
      })
    }
    //서버에 데이터 요청
    postData();

    //언마운트
    return () =>{
      console.log("unmount");
    }
  }, []);

  useDidMountEffect(() => {
    console.log("data: "+ JSON.stringify(rawdata));

    //데이터 처리
    const parser = () =>{
      //데이터 처리 시작
      console.log("data processing start!");

      //JSON data
      let usage = rawdata.usage;
      console.log("usage: " + usage);
      let usage_data = usage.map(function(element){
        return (Math.floor(element/60) + "분 " + (element-((Math.floor(element/60))*60)).toFixed(2)+ "초")
      })
      console.log("usage_data: " + usage_data);
      setDatasetData(usage); //사용 요청 시간

      let axisX = rawdata.axisX;
      console.log("axisX: " + axisX);
      setDatasetAxisX(rawdata.axisX); //X축(날짜)
    }

    parser();

  }, [rawdata])

  //차트 데이터
  const data = {
    labels: datasetAxisX,
    datasets: [
        {
            label: '일일 사용량(분)',
            data: datasetData,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
        // {
        //     label: 'Sensor2',
        //     data: [1, 2, 4, 11, 7, 2, 9, 8],
        //     fill: false,
        //     backgroundColor: 'rgb(54, 162, 235)',
        //     borderColor: 'rgba(54, 162, 235, 0.2)',
        // },
        // {
        //   label: 'Sensor3',
        //   data: [10, 12, 14, 1, 17, 5, 19, 18],
        //   fill: false,
        //   backgroundColor: 'rgba(75, 192, 192, 1)',
        //   borderColor: 'rgba(75, 192, 192, 0.2)',
        // },
    ],
  };
  
  //차트 옵션
  const options={
    plugins:{
      subtitle:{
        display: true,
        color: "#000000",
        font: {
          size: 24
        }
      }
    }
  }
  
  return(
    <div>
        <Line data={data} options={options}/>
    </div>
  );
}

export default StatChart;