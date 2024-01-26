import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ItemNumber from './components/ItemNumber';
// Import other components
import SpreadsheetDisplay from './components/SpreadsheetDisplay';
import { SpreadsheetProvider } from './context/SpreadsheetContext';

const App = () => (
    <SpreadsheetProvider>
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/item-number" component={ItemNumber} />
      {/* Define routes for other components */}
      <Route path="/spreadsheet" component={SpreadsheetDisplay} />
    </Switch>
  </Router>
  </SpreadsheetProvider>
);

export default App;
