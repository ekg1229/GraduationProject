import React from "react";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
      {
          label: 'Sensor1',
          data: [12, 19, 3, 5, 2, 3, 8],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
          label: 'Sensor2',
          data: [1, 2, 4, 11, 7, 2, 9, 8],
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Sensor3',
        data: [10, 12, 14, 1, 17, 5, 19, 18],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 1)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options={
  plugins:{
    subtitle:{
      display: true,
      text: "사용통계",
      color: "#000000",
      font: {
        size: 24
      }
    }
  }
}

function StatChart(){
  return(
    <div>
        <Line data={data} options={options}/>
    </div>
  );
}

export default StatChart;