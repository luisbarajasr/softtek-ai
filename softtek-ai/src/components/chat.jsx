import React from "react"
import { useState } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Chat() {
    const [alturaContainer, setAlturaContainer] = useState(0);
    const [questionText, setQuestionText] = useState('');

    const handleSubmit = () => {
        setQuestionText(''); // Restablece el valor del input a vacío
        setAlturaContainer(300); // Cambia la altura a 300px cuando se hace clic en el botón
        console.log(questionText);
    };

    const handleInputChange = (e) => {
        setQuestionText(e.target.value);
    };

    return (
        <div className="container-general w-75 bg-white rounded z-1" style={{ height: `${alturaContainer}px`, position: "absolute" }}>
            <div className="input-group position-relative top-0 start-0 ">
                <div className="form-floating">
                    <input
                        type="text"
                        className="form-control"
                        id="landing-page-input"
                        placeholder="Hazme una pregunta"
                        value={questionText} // Asigna el valor del input al estado questionText
                        onChange={handleInputChange}
                    />
                    <label htmlFor="landing-page-input">Hazme una pregunta</label>
                </div>

                <button
                    className="btn btn-success"
                    type="button"
                    onClick={handleSubmit}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
}


export default Chat; 