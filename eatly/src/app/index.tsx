import React from 'react'
import { createRoot } from 'react-dom/client'

import 'normalize.css'
import './globals.scss'

import { App } from './App'

const reactRoot = createRoot(document.getElementById('root')!)

reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
