import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import Question from './question';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Question />, document.getElementById('container'));
registerServiceWorker();

