import { useState, useEffect } from 'react'

const useIsMd = () => {
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth < 1000)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMd
}

export default useIsMd
