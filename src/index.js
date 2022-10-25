import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom'
import App from './App'
import About from './About'
import Navigation from './Navigation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navigation/>
    </Router>
    <Router>
      <App/>
    </Router>
    <Router>
      <About/>
    </Router>
  </React.StrictMode>
)

