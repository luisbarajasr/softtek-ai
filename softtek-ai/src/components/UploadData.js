import React, { useState } from "react";
import Papa from "papaparse";
import functions from "../firebase/functions";

const UploadData = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadCSVFn = functions.httpsCallable("uploadCSV");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let products = [];
    const csv = atob(file.base64.split(",")[1]);
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true, // Ignorar las líneas vacías en el archivo CSV
      complete: async function (results) {
        for (let i = 0; i < Math.min(results.data.length, 1000); i++) {
          products.push(results.data[i]);
        }

        try {
          await uploadCSVFn(products).then((result) => {
            console.log(result);
            setLoading(false);
          });
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload Data</h1>
      <form
        onSubmit={handleOnSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label>
          Select a CSV file:
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".csv"
            style={{ padding: "10px", marginTop: "5px" }}
            placeholder="Choose a CSV file"
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default UploadData;
