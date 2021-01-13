import { useRef, useState, useCallback, RefObject } from 'react'

export type MouseRef = {
  active: boolean
  setActive: (a: boolean) => void
  ref: RefObject<HTMLDivElement>
  scrollToElement: VoidFunction
}

const useMouseRef = (): MouseRef => {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const scrollToElement = useCallback(() => {
    ref.current && ref.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return {
    active,
    setActive,
    ref,
    scrollToElement,
  }
}

export default useMouseRef
