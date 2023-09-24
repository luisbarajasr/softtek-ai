import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";

function WordsChart(props) {
  //Make the props.dataframe(string) into a an array of objects
  console.log(typeof props.dataframe);
  console.log(props.dataframe);

  const prueba = JSON.parse(props.dataframe);
  console.log(prueba);

  let data = [];

  // useEffect(() => {
  //   if (props.dataframe) {
  //     console.log("props.dataframe: " + props.dataframe);
  //     Object.entries(props.dataframe).forEach(([key, value]) => {
  //       data.push({ value: value, name: key });
  //     });
  //   }
  // }, [props.dataframe]);

  const getOptionPie = () => {
    return {
      tooltip: {
        trigger: "item",
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Palabras",
          type: "pie",
          radius: "80%",
          data: prueba,
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
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  };

  return (
    <>
      <p
        className="fw-bold mb-0 border-bottom pb-1 mb-1"
        style={{
          fontSize: "0.8rem",
        }}
      >
        Palabras {props.type}
      </p>
      <ReactECharts
        style={{ height: "300px" }}
        option={getOptionPie()}
        notMerge={true}
        lazyUpdate={true}
      />
    </>
  );
}

export default WordsChart;
