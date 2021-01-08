import { useState, useEffect } from 'react'

type UseWindow = {
  width: number
  height: number
  isMobile: boolean
}

const MOBILE_MAX_WIDTH = 600

const useWindow = (): UseWindow => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    width,
    height,
    isMobile: width <= MOBILE_MAX_WIDTH,
  }
}

export default useWindow
