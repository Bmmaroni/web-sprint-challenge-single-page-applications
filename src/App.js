import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './components/Form';
import Confirmation from './components/Confirmation';

// 1. In 1-2 sentences, explain what React's `useRouteMatch` hook is used for?

  // React's useRouteMatch hook can be used as a single parameter route. Its useful if you don't actually want to render a Route.

// 2. How would you explain form validation to someone who has never programmed before?

  // Form validation is essential a function that checks each input on a form to make sure that it is filled out properly before submitting the form to the server. 

// 3. In 1-2 sentences, define end to end testing.

  // End to end testing is a way for a developer to do a practice run using whatever parameters set by the developer to check the entire flow of an application from start to finish.


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
        <Route path='/confirmation'>
          <Confirmation />
        </Route>
      </div>
    </Router>
  );
};
export default App;
