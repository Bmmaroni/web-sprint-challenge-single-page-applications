import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Lambda Eats</h1>
        <nav>
          <a href='/'>Home</a>
          <a href='/pizza'>Pizza?</a>
        </nav>
        <Route exact path='/'>
        </Route>
        <Route path='/pizza'>
          <Form />
        </Route>
      </div>
    </Router>
  );
};
export default App;
