import React from "react";
import {
  useState
} from "react";
function ProductPageThirdSlide() {

  const [responsePositiva, setResponsePositiva] = useState(" ");
  const [responseNegativa, setResponseNegativa] = useState(" ");

  const prompPositiva = "utilizando todas las reseñas positivas sobre el producto Bermuda Shorts, de todas las personas, realiza un resumen y una lista de las palabras positivas mas utilizadas juntos con las frases mas positivas "
  const prompNegativa = " utilizando todas las reseñas negativas sobre el producto Bermuda Shorts, de todas las personas, realiza un resumen y una lista de las palabras negativas mas utilizadas juntos con las frases mas negativas "

  const handleSubmit = async () => {
    // setLoading(true);
    // if (!questionText) return;

    try {
      const result1 = await fetch('https://us-central1-hackathon2023-48cc2.cloudfunctions.net/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompPositiva })
      });
      const data1 = await result1.json();
      setResponsePositiva(data1.response)

      const result2 = await fetch('https://us-central1-hackathon2023-48cc2.cloudfunctions.net/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompNegativa })
      });
      const data2 = await result2.json();

      setResponseNegativa(data2.response);
      // setLoading(false);

    } catch (error) {

      console.error("Hubo un error al llamar a la Cloud Function:", error);
    }

    // setQuestionText(''); // Restablece el valor del input a vacío
    console.log(responsePositiva);
  };

  return (
    <div className='container'>
      <div className='chat-container row p-5 gap-5'>
        <div className='col'>
          <textarea value={responsePositiva} className='w-100 bg-white rounded shadow p-3' style={{ resize: "none", height: "400px" }} />
          <p className='text-muted'>Reseña positiva usando opiniones de clientes</p>
        </div>
        <div className='col'>
          <textarea value={responseNegativa} className='w-100 bg-white rounded shadow p-3' style={{ resize: "none", height: "400px" }} />
          <p className='text-muted'>Reseña negativa usando opiniones de clientes</p>
        </div>
      </div>
      <div className="row bg-primary">
        <button className="btn btn-success" onClick={handleSubmit}>
          Obtener reseñas
        </button>
      </div>
    </div>
  )
}

export default ProductPageThirdSlide;