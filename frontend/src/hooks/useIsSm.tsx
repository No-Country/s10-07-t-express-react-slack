import { useState, useEffect } from 'react'

const useIsSm = () => {
  const [isMd, setIsMd] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth > 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMd
}

export default useIsSm
