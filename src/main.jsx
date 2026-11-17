import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './app.jsx'

gsap.registerPlugin(ScrollTrigger)

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      anchors: true,
      lerp: 0.1,
    })
    const updateScroll = (time) => lenis.raf(time * 1000)

    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(updateScroll)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateScroll)
      lenis.destroy()
    }
  }, [])

  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </StrictMode>,
)
