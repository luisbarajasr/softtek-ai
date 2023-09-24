import React from "react"
import { useState } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Chat() {
    const [response, setResponse] = useState(null);
    const [prompt, setPrompt] = useState("");

    const [alturaContainer, setAlturaContainer] = useState(0);
    const [questionText, setQuestionText] = useState('');

    const [chatHistory, setChatHistory] = useState([]);


    const handleSubmit = async () => {

        if (!questionText) return;

        setChatHistory((prevChat) => [...prevChat, { user: true, text: questionText }]);

        try {
            const result = await fetch('https://us-central1-hackathon2023-48cc2.cloudfunctions.net/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: questionText })
            });
            const data = await result.json();

            setChatHistory((prevChat) => {
                const updatedChat = [...prevChat];
                updatedChat[updatedChat.length - 1] = { user: false, text: result };
                return updatedChat;
            });

            setResponse(data.response);

        } catch (error) {
            setChatHistory((prevChat) => {
                const updatedChat = [...prevChat];
                updatedChat[updatedChat.length - 1] = { user: false, text: "Oops! An error ocurred, try it later." };
                return updatedChat;
            });
            console.error("Hubo un error al llamar a la Cloud Function:", error);
        }

        setQuestionText(''); // Restablece el valor del input a vacío
        setAlturaContainer(300); // Cambia la altura a 300px cuando se hace clic en el botón
        console.log(questionText);
    };

    const handleInputChange = async (e) => {
        setQuestionText(e.target.value);
    };

    const handleRequest = async () => {
        try {
            const result = await fetch('https://us-central1-hackathon2023-48cc2.cloudfunctions.net/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ prompt: prompt })
            });
            const data = await result.json();
            console.log(data);
            setResponse(data.response);
        } catch (error) {
            console.error("Hubo un error al llamar a la Cloud Function:", error);
        }
    };

    return (
        <div className="container-general w-100 bg-white rounded z-1" style={{ height: `${alturaContainer}px`, position: "relative" }}>
            <div className="input-group  position-relative top-0 start-0 ">
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

                {response && <div className="text-dark p-3">Respuesta: {response}</div>}

            </div>
            {/* <div>
                <input
                    value={prompt}
                    onChange={e => setPrompt(e.target.value)}
                    placeholder="Introduce el prompt"
                />
                <button onClick={handleRequest}>Enviar</button>
                {response && <div className="bg-white">Respuesta: {response}</div>}
            </div> */}
        </div>
    );
}


export default Chat; 