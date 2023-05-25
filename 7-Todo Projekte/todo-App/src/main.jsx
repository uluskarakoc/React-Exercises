import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from './components/TodoApp'
import { BrowserRouter } from 'react-router-dom'

// import './index.css'
import './styles/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter "aktivieren" bzw. in TodoApp-Component verfügbar machen*/}
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
)
