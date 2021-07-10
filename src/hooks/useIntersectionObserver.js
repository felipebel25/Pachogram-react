import { useRef, useState, useEffect } from 'react'

export const useIntersectionObserver = () => {
  const ref = useRef(null)

  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      'IntersectionObserver' in window !== false
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        console.log({ isIntersecting })
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(ref.current)
    })
  }, [ref])

  return [show, ref]
}
