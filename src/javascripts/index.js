import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import registerServiceWorker from './service_worker/registerServiceWorker';

import './stylesheets/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
