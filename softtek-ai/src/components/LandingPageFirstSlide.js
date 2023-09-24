import React from "react"
import { useState } from "react";
import logoImage from "../assets/logo.png"
import QuestionTag from "./QuestionTag";
import Chat from "./chat.jsx"

function LandingPageFirstSlide() {
  const exampleQuestions = [
    "¿Cuál producto es el más vendido?",
    "¿Cuál producto es el menos vendido?",
    "¿Cuál producto tiene mejor calificación?",
    "¿Cuál producto tiene peor calificación?",
    "¿Cuál producto tiene más comentarios?",
    "¿Cuál producto tiene menos comentarios?",
    "¿Qué producto genera más interacción en las redes sociales?"
  ]

  function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const shuffledQuestions = shuffleArray(exampleQuestions);
  const randomQuestions = shuffledQuestions.slice(0, 6);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100 p-5 mb-4">
        <img src={logoImage} alt="logo" style={{ width: "100px" }} />
      </div>

      <div className="d-flex flex-column w-50 align-items-center mb-2">
        <div>
          <h1 className="text-white">Softtek x Generative AI</h1>
        </div>

        <Chat />
      </div>

      <div className="w-75 d-flex justify-content-center static flex-row flex-wrap row-gap-3 opacity-75">
        {randomQuestions.map((question, index) => {
          return (
            <QuestionTag key={index} question={question} />
          )
        })}
      </div>

    </div>

  )
}

export default LandingPageFirstSlide