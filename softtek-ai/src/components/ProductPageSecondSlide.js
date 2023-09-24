import React from "react";
import ReactECharts from "echarts-for-react";
import OpinionTag from "./OpinionTag";


function ProductPageSecondSlide() {

  const getOption = () => {
    return {
      title: {
        text: 'Palabras más repetidas',
        left: 'center', // Centrar el título
        top: 'top',
        textStyle: {
          fontSize: 24
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'category',
        data: ['calidad', 'durable', 'bonito', 'barato', 'elegante'],
        axisLabel: {
          interval: 0,
          textStyle: {
            fontSize: 14
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            fontSize: 14
          }
        }
      },
      series: [
        {
          data: [10, 20, 30, 40, 50],
          type: 'bar',
          itemStyle: {
            color: '#347B98', // Color de las barras
            barBorderRadius: [5, 5, 0, 0] // Borde redondeado para las barras
          },
          shadowColor: 'rgba(0, 0, 0, 0.5)', // Sombra de las barras
          shadowBlur: 10
        }
      ]
    };
  };



  return (
    <div className="h-100 d-flex flex-column justify-content-center">
      <ReactECharts
        option={getOption()} // Use the getOption function to get ECharts options
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        opts={{ renderer: 'svg' }}
      />
      <div className='w-100 d-flex justify-content-center align-items-center flex-wrap row-gap-3 opacity-75'>
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
        <OpinionTag text="buena calidad" />
      </div>
    </div>
  )
}

export default ProductPageSecondSlide;