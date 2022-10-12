import React from "react";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["위험", "경고", "좋음"],
  datasets: [
    {
      data: [12, 19, 11],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
    }
  ]
}

function DoughnutChart(){
  return(
    <div>
        <Doughnut data={data}/>
    </div>
  );
}

export default DoughnutChart;