import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CatalogueProvider } from './context/CatalogueProvider.jsx'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatalogueProvider>
      <App/>
    </CatalogueProvider>
  </React.StrictMode>,
)
