import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Question from './Question';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(<Question />, document.getElementById('question'));
registerServiceWorker();

