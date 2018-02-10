import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Question from './Question';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(<Question />, document.getElementById('container'));
registerServiceWorker();

