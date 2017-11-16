import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/layout';
import tracking from './utils/nine-thirdparty-kit';
import './index.css';

tracking.initialize();

ReactDOM.render(<Layout />, document.getElementById('root'));
