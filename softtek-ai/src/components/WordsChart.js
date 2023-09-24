import React from "react"
import ReactECharts from "echarts-for-react";

function WordsChart(props) {
  const getOptionPie = () => {
    return {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Palabras ' + props.type,
          type: 'pie',
          radius: '80%',
          data: [
            { value: 400, name: 'Buena' },
            { value: 735, name: 'Excelente' },
            { value: 580, name: 'Grande' },
            { value: 484, name: 'Calidad de audio' },
            { value: 1000, name: 'Buen sonido' },
          ],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  };

  return(
    <>
      <p
        className="fw-bold mb-0 border-bottom pb-1 mb-1"
        style={{
          fontSize: "0.8rem"
        }}
      >
        Palabras {props.type}
      </p>
    <ReactECharts
      style={{ height: "150px" }}
      option={getOptionPie()}
      notMerge={true}
      lazyUpdate={true}
    />
    </>

)
}

export default WordsChart