import { useRef, useState, useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export type Location = {
  pathname: string
  hash: string
}

export type MouseRef = {
  active: boolean[]
  sections: Location[]
  assignRef: (el: HTMLDivElement, id: number) => void
}

const useMouseRef = (sections: Location[]): MouseRef => {
  const [active, setActive] = useState([
    true,
    ...Array(sections.length - 1).fill(false),
  ])
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const location = useLocation()

  const setActiveSection = useCallback((idx: number) => {
    setActive(active => active.map((_, id) => idx === id))
  }, [])

  const scrollToElement = useCallback(
    (idx: number) => {
      const ref = refs.current[idx]
      ref && ref.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(idx)
    },
    [setActiveSection],
  )

  const assignRef = (el: HTMLDivElement, idx: number) => {
    refs.current[idx] = el
  }

  const handleMouseOver = useCallback(
    (e: MouseEvent) => {
      sections.forEach((_, id) => {
        const ref = refs.current[id]
        if (ref && ref.contains(e.target as HTMLElement)) {
          setActiveSection(id)
        }
      })
    },
    [setActiveSection, sections],
  )

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseOver)
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseOver])

  useEffect(() => {
    if (location.hash) {
      const isLocation = (loc: Location) => loc.hash === location.hash
      scrollToElement(sections.findIndex(isLocation))
    }
  }, [location, scrollToElement, sections])

  return {
    active,
    sections,
    assignRef,
  }
}

export default useMouseRef
