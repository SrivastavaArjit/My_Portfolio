import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import CustomBounce from 'gsap-trial/CustomBounce'
import CustomEase from 'gsap-trial/CustomEase'
// import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin, CustomEase, CustomBounce)
  }, [])

  return <div className="logo-container" ref={bgRef}></div>
}

export default Logo
