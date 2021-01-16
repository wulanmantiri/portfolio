import {
  useRef,
  useState,
  useCallback,
  useEffect,
  MutableRefObject,
} from 'react'

export type MouseRef = {
  active: boolean[]
  refs: MutableRefObject<(HTMLDivElement | null)[]>
  setActiveSection: (id: number) => void
  scrollToElement: (id: number) => void
}

const useMouseRef = (numberOfRefs: number): MouseRef => {
  const [active, setActive] = useState([
    true,
    ...Array(numberOfRefs - 1).fill(false),
  ])
  const refs = useRef<Array<HTMLDivElement | null>>([])

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

  const handleMouseOver = useCallback(
    (e: MouseEvent) => {
      active.forEach((_, id) => {
        const ref = refs.current[id]
        if (ref && ref.contains(e.target as HTMLElement)) {
          setActiveSection(id)
        }
      })
    },
    [setActiveSection, active],
  )

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseOver)
    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [handleMouseOver])

  return {
    active,
    refs,
    setActiveSection,
    scrollToElement,
  }
}

export default useMouseRef
