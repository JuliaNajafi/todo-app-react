import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'


let items = [
  "groceries",
  "learn stuff",
  "labs"
]


ReactDOM.render(
  <App items={items}/>,
  document.getElementById('root')
)
