import React, { useEffect } from "react";
import { AppContext } from "../AppContext";

function ProductPageSecondSlide() {
  const { productPageData } = React.useContext(AppContext);
  const [text, setText] = React.useState("");
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

  useEffect(() => {
    setText(productPageData.repeatedWords);
  }, [productPageData.repeatedWords]);

  //Format the text to be displayed, when a "-" is found or a number(3.), it is replaced by a new line
  useEffect(() => {
    if (text) {
      let newText = text.replaceAll("-", "\n");
      newText = newText.replaceAll(/[0-9]+\./g, "\n");
      setText(newText);
    }
  }, [text]);

  return (
    <div className="h-100 d-flex flex-column justify-content-center">
      <h3 className="fs-1 fw-semibold mb-0 text-center" style={{color: "black", textDecoration:"underline"}}> Palabras más repetidas </h3>
      <p className="fs-1 fw-semibold mb-0 text-center" style={{color: "black", margin: "1rem"}}>
        {text}
      </p>
    </div>
  )
}

export default ProductPageSecondSlide;