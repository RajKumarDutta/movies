import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { MoviesStore } from './redux/MoviesStore.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={MoviesStore}>
    <App />
    </Provider>
  </StrictMode>,
)
