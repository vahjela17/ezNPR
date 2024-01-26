// SpreadsheetContext.js
import React, { createContext, useContext, useState } from 'react';

const SpreadsheetContext = createContext();

export const useSpreadsheet = () => useContext(SpreadsheetContext);

export const SpreadsheetProvider = ({ children }) => {
  const [currentEntry, setCurrentEntry] = useState({});
  const [entries, setEntries] = useState([]);

  const addEntry = (newData) => {
    setCurrentEntry((prevEntry) => ({ ...prevEntry, ...newData }));
  };

  const submitEntry = () => {
    setEntries((prevEntries) => [...prevEntries, currentEntry]);
    setCurrentEntry({}); // Reset for new entry
  };

  return (
    <SpreadsheetContext.Provider value={{ entries, addEntry, submitEntry }}>
      {children}
    </SpreadsheetContext.Provider>
  );
};
