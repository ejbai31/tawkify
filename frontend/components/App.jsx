import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import NavBar from './nav/navbar';
import About from './about_yourself/about';
import AddPhoto from './add_photos/add_photos';

const App = () => (
  <div>
    <Route path="/" component={ NavBar }/>
    <Switch>
      <Route path="/about" component={ About }/>
      <Route path="/add_photo" component={ AddPhoto } />
    </Switch>
  </div>
);

export default App;