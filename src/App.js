import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Lambda Eats</h1>
        <Route exact path='/'>
        </Route>
        <Route path='/components/pizza'>
          {/* <Form /> */}
        </Route>
      </div>
    </Router>
  );
};
export default App;
