import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
// import App from './App';
import Question from './question';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(<Question />, document.getElementById('container'));
registerServiceWorker();

