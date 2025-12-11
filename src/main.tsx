import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './scss/style.scss'
import Swipercom from './Swiper'
import App from './App'
import Popup from './Popup'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Popup />
    <App />
    <Swipercom />
  </StrictMode>,
)
