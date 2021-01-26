import React, { ReactElement, createContext, useState, useEffect } from 'react'

import { ChildrenProps } from 'types'

interface ILoadContext {
  isLoading: boolean
}

export const LoadContext = createContext<ILoadContext>({
  isLoading: false,
})

const LoadProvider = ({ children }: ChildrenProps): ReactElement => {
  const [firstLoad, setFirstLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    firstLoad && setIsLoading(true)
  }, [firstLoad, setIsLoading])

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false)
      setFirstLoad(false)
    }

    window.addEventListener('load', handleLoad)
    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <LoadContext.Provider value={{ isLoading }}>
      {children}
    </LoadContext.Provider>
  )
}

export default LoadProvider
