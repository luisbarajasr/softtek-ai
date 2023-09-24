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
        results.data.forEach((element) => {
          products.push(element);
        });

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
    <div>
      <h1>Upload Data</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept=".csv"
      />
    </div>
  );
};

export default UploadData;
