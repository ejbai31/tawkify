import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import AboutYourself from '../components/about_yourself/about';
import NavBar from '../components/nav/navbar';

const App = () => (
  <div>
    <Route path="/" component={ NavBar }/>
  </div>
);

export default App;