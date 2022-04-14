import { Provider } from "./Context";
import React from "react";
import ReactDOM from 'react-dom'
import App from './router/App'
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
