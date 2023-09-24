import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logoImage from "../assets/logo.png"
import QuestionTag from "./QuestionTag";

function LandingPage() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="w-100 p-5 mb-4">
        <img src={logoImage} alt="logo" style={{width: "100px"}}/>
      </div>

      <div className="d-flex flex-column w-50 align-items-center mb-2">
        <h1 className="text-white">Softtek x Generative AI</h1>
        <div className="input-group">
          <div className="form-floating">
            <input type="text" className="form-control" id="landing-page-input" placeholder="¿Cuál producto es el más vendido?" />
            <label htmlFor="landing-page-input">Hazme una pregunta</label>
          </div>
          <button className="btn btn-success" type="button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <div className="w-75 d-flex justify-content-center flex-row flex-wrap row-gap-3 opacity-75">
        <QuestionTag />
        <QuestionTag />
        <QuestionTag />
        <QuestionTag />
        <QuestionTag />
        <QuestionTag />
        <QuestionTag />
        <QuestionTag />
      </div>

    </div>

  )
}

export default LandingPage