import { createRoot } from 'react-dom/client'
import { App } from './app'

const rootEl = document.getElementById('root')
createRoot(rootEl).render(App({}))
