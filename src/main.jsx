import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import './index.css'
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
      <Provider store={store}>
        <Router>
            <App />
        </Router>
      </Provider>
)
