import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer.jsx';

// How is id sent to module? Middleware for express to parse param?
ReactDOM.render(
  <Footer />, document.getElementById('reviews')
);
