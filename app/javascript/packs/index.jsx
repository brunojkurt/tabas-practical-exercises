import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement('div')
  rootElement.id = 'root'
  ReactDOM.render(
    <App />,
    document.body.appendChild(rootElement),
  )
})
