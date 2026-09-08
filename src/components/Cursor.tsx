import { useEffect, useRef, useState } from 'react'

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setVisible(true)

      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`
        cursorRef.current.style.top = `${event.clientY}px`
      }

      const target = event.target as HTMLElement

      if (target.closest('a, button')) {
        setHovering(true)
      } else {
        setHovering(false)
      }
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      )
    }
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? 'cursor-hover' : ''}`}
    />
  )
}

export default Cursor