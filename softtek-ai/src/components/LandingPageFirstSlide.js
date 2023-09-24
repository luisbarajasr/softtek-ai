import React, {useEffect} from "react"
import { useState } from "react";
import logoImage from "../assets/logo.png"
import QuestionTag from "./QuestionTag";
import Chat from "./chat.jsx"

function LandingPageFirstSlide() {
  let [randomQuestions, setRandomQuestions] = useState([]);
  let shuffledQuestions = [];
  let exampleQuestions = [];
  useEffect(() => {
    exampleQuestions = [
      "¿Cuál producto es el más vendido?",
      "¿Cuál producto es el menos vendido?",
      "¿Cuál producto tiene mejor calificación?",
      "¿Cuál producto tiene peor calificación?",
      "¿Cuál producto tiene más comentarios?",
      "¿Cuál producto tiene menos comentarios?",
      "¿Qué producto genera más interacción en las redes sociales?"
    ]
    shuffledQuestions = shuffleArray(exampleQuestions);
    setRandomQuestions(shuffledQuestions.slice(0, 6));
  }, [])

  const [response, setResponse] = useState(null);
  const [questionText, setQuestionText] = useState('');

  function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }


  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 w-100"
    >

      <div className="d-flex flex-column w-50 align-items-center mb-2">
        <div>
          <h1 className="text-white">Softtek x Generative AI</h1>
        </div>

        <Chat response={response} setResponse={setResponse} questionText={questionText} setQuestionText={setQuestionText}/>
      </div>

      <div className="w-75 d-flex justify-content-center static flex-row flex-wrap row-gap-3 opacity-75">
        {randomQuestions.map((question, index) => {
          return (
            <QuestionTag key={index} question={question} setQuestionText={setQuestionText} respone={response} setResponse={setResponse}/>
          )
        })}
      </div>

    </div>

  )
}

export default LandingPageFirstSlide