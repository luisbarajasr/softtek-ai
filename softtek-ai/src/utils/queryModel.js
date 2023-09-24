async function queryModel(questionText) {
    try {
      const result = await fetch(
        "https://us-central1-hackathon2023-48cc2.cloudfunctions.net/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: questionText }),
        }
      );
  
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await result.json();
      return data;
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error.message);
      throw error; // Re-throwing the error so that you can handle it in the component.
    }
  }
  
  export default queryModel;
  