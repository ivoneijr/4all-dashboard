import React from 'react';
import ReactDOM from 'react-dom';

import App from './javascripts/components/App';
import registerServiceWorker from './javascripts/service_worker/registerServiceWorker';

import './stylesheets/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
