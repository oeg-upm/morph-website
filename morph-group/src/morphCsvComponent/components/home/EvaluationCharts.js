import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Row, Col, Typography} from 'antd';

const {Text} = Typography

const plugins = [{
  afterDraw: (chartInstance, easing) => {
      const ctx = chartInstance.chart.ctx;
      ctx.fillText("TIME OUT", 100, 100);
  }},
  {
    color: function(chartInstance, easing) {
      const context = chartInstance.chart.ctx;
      var index = context.dataIndex;
      var value = context.dataset.data[index];
      return value >= 72000 ? 'red' :  // draw negative values in red
          index % 2 ? 'blue' :    // else, alternate values in blue and green
          'green';
  }}
];

const getScale = (data) => {
  let max = Math.max(data);
  let result = []
  console.log("MAX: " + max)
  for(let i = 1; i <= max; i += i * 10){
    result.push(i)
  }
  return result
}
  
export default function EvaluationCharts(props){
  const scaleLabels = getScale(props.morphcsv) 
  console.log(props.morphcsv)
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: 'Morph-CSV + Morph-RDB',
        type:'bar',
        backgroundColor: '#ffc100',
        borderColor: '#ffc100',
        borderWidth: 1,
        hoverBackgroundColor: '#ffc100',
        hoverBorderColor: '#ffc100',
        data: props.morphcsv,
        yAxisID: 'first-y-axis'
      },
      {
        label: 'Morph-RDB',
        type:'bar',
        backgroundColor: '#4470c5',
        borderColor: '#4470c5',
        borderWidth: 1,
        hoverBackgroundColor: '#4470c5',
        hoverBorderColor: '#4470c5',
        data: props.naive,
        yAxisID: 'first-y-axis'
      }
    ]
  };  
  const options =  {
    scales: {
        yAxes: [{
            id: 'first-y-axis',
            type: 'logarithmic',
            beginAtCero:true,
            stepSize:1,
                  ticks: {
                    display:false
                  },
                  gridLines:{
                    display:false
                  }
          }, {
            type:'category',
            labels:scaleLabels,
            beginAtCero:true,
            stepSize:1,
                  ticks: {
                    display:true,
                    max:8000
                  },
                  gridLines:{
                    display:false
                  }
          }
      ],

    },

}
    return(
        <div>
            <Text strong>Size: {props.size}</Text>
            <Bar
                data={data} 
                options={options}
            />
        </div>
    )

}