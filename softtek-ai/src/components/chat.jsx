import React, { useState, useRef, useEffect } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Chat(props) {
    let { response, setResponse, questionText, setQuestionText } = props;
    let [loading, setLoading] = useState(false);

    const [prompt, setPrompt] = useState("");



    const [chatHistory, setChatHistory] = useState([]);

    const inputRef = useRef(null);
    const responseRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (
              inputRef.current && !inputRef.current.contains(event.target) &&
              responseRef.current && !responseRef.current.contains(event.target)
            ) {
                setResponse(null);
            }
        }

        document.addEventListener("click", handleClickOutside);

        // Limpiar el listener cuando el componente se desmonte.
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []); // Dependencias vacías para que solo se ejecute una vez.




    const handleSubmit = async () => {
        setLoading(true);
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
            setLoading(false);

        } catch (error) {
            setChatHistory((prevChat) => {
                const updatedChat = [...prevChat];
                updatedChat[updatedChat.length - 1] = { user: false, text: "Oops! An error ocurred, try it later." };
                return updatedChat;
            });
            console.error("Hubo un error al llamar a la Cloud Function:", error);
        }

        setQuestionText(''); // Restablece el valor del input a vacío
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
            <div className="input-group position-relative">
                <div className="form-floating z-2" >
                    <input
                        ref={inputRef}
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
                    {loading ?
                          <div className="spinner-grow spinner-grow-sm" role="status">
                              <span className="visually-hidden">Loading...</span>
                          </div>
                      :
                        <FontAwesomeIcon icon={faSearch} />
                    }
                </button>

                {response &&
                  <div className="position-absolute bg-white py-4  px-3 rounded "
                       ref={responseRef}
                        style={{
                            width: "99%",
                            top: "80%",
                            right: "1%",
                          }}
                  >
                      {response}
                  </div>
                }

            </div>
    );
}


export default Chat; 