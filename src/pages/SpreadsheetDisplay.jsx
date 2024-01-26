import React from 'react';
import { useSpreadsheet } from '../context/SpreadsheetContext';
import { useHistory } from 'react-router-dom';

const SpreadsheetDisplay = () => {
  const { data } = useSpreadsheet();
  const history = useHistory();

  return (
    <div>
      <table>
        <thead>
          {/* Table headers */}
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {/* Table row data */}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => history.push('/item-number')}>New Entry</button>
    </div>
  );
};

export default SpreadsheetDisplay;
