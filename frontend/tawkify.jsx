import React from 'react';
import ReactDOM from 'react-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});