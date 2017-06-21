import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './javascripts/components/dashboard';
import registerServiceWorker from './javascripts/service_worker/registerServiceWorker';

import './stylesheets/index.css';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
