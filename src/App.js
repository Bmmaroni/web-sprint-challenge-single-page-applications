import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <div>
          <h1>Lambda Eats</h1>
        </div>
      </Route>
      <Route path='/components/pizza'>
        <Pizza />
      </Route>
    </Router>
  );
};
export default App;
