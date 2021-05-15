import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './App'

ReactDom.render(
  <App userName="user" message="React/Typescript boilerplate code" />,
  document.getElementById('app')
)