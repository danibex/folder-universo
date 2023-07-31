import { useState } from 'react';
import Papa from 'papaparse';

const Upload = () => {
  const [data, setData] = useState('');

  const handleDataChange = (event) => {
    const { value } = event.target;
    setData(value);
  };

  const processCSVToObject = () => {
    Papa.parse(data, {
      complete: function (results) {
        const csvData = results.data;
        const headers = csvData[0]; // Assuming the first row contains the column headers
        const objectsArray = [];

        for (let i = 1; i < csvData.length; i++) {
          const object = {};
          for (let j = 0; j < headers.length; j++) {
            object[headers[j]] = csvData[i][j];
          }
          objectsArray.push(object);
        }

        console.log(objectsArray);
        // Here, you have the array of objects representing each row of the CSV.
        // You can use this "objectsArray" for further processing or display in your application.
      },
      header: true,
    });
  };

  return (
    <div>
      <textarea
        value={data}
        onChange={handleDataChange}
        placeholder="Paste CSV data here..."
        rows="10"
        cols="50"
      />
      <button onClick={processCSVToObject}>Process CSV</button>
    </div>
  );
};

export default Upload;
