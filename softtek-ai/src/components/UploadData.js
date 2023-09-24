import React, { useState } from "react";
import Papa from "papaparse";
import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase";

const UploadData = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadCSVFn = httpsCallable(functions, "uploadCSV");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (file === null) {
      alert("Please select a file");
      setLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
      const base64String = reader.result.split(",")[1];

      // Now use Papaparse with the base64 data
      Papa.parse(atob(base64String), {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: async function (results) {
          let products = [];
          for (let i = 0; i < Math.min(results.data.length, 1000); i++) {
            products.push(results.data[i]);
          }

          try {
            await uploadCSVFn({ products: products }).then((result) => {
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
