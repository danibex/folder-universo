import { useState } from 'react';
import csv from 'fast-csv';

const Upload = () => {
  const [data, setData] = useState('');

  const handleDataChange = (event) => {
    const { value } = event.target;
    setData(value);
  };

  const processData = () => {
    const objectsArray = [];

    csv
      .parseString(data, {
        headers: true, // Assuming the first row contains the column headers
        skipEmptyLines: true, // Skip empty lines if any
      })
      .on('data', (row) => {
        objectsArray.push(row);
      })
      .on('end', () => {
        console.log(objectsArray);
        // Here, you have the array of objects representing each row of the CSV.
        // You can use this "objectsArray" for further processing or display in your application.
      });
  };

  return (
    <div>
      <textarea
        value={data}
        onChange={handleDataChange}
        placeholder="Cole os dados da planilha aqui..."
        rows="10"
        cols="50"
      />
      <button onClick={processData}>Processar Dados</button>
    </div>
  );
};

export default Upload;


// youtube.com/watch?v=zVlm_zUfitE