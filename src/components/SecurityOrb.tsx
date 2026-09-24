import { useEffect, useRef } from 'react'

type Point = {
  x: number
  y: number
  z: number
  size: number
  phase: number
}

const pointCount = 86

function createPoints(): Point[] {
  return Array.from({ length: pointCount }, (_, index) => {
    const latitude = Math.acos(1 - (2 * (index + 0.5)) / pointCount)
    const longitude = Math.PI * (3 - Math.sqrt(5)) * index

    return {
      x: Math.sin(latitude) * Math.cos(longitude),
      y: Math.cos(latitude),
      z: Math.sin(latitude) * Math.sin(longitude),
      size: 1.2 + (index % 4) * 0.45,
      phase: index * 0.37,
    }
  })
}

function SecurityOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const points = createPoints()
    let frame = 0
    let animationFrame = 0
    let width = 0
    let height = 0
    let pixelRatio = 1

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = bounds.width
      height = bounds.height
      canvas.width = width * pixelRatio
      canvas.height = height * pixelRatio
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const render = (time: number) => {
      frame = time * 0.00035
      context.clearRect(0, 0, width, height)

      const centerX = width * 0.53 + pointerRef.current.x * 18
      const centerY = height * 0.49 + pointerRef.current.y * 14
      const radius = Math.min(width, height) * 0.31
      const rotationY = frame + pointerRef.current.x * 0.24
      const rotationX = pointerRef.current.y * 0.16

      const projected = points
        .map((point) => {
          const cosY = Math.cos(rotationY)
          const sinY = Math.sin(rotationY)
          const rotatedX = point.x * cosY - point.z * sinY
          const rotatedZ = point.x * sinY + point.z * cosY
          const cosX = Math.cos(rotationX)
          const sinX = Math.sin(rotationX)
          const rotatedY = point.y * cosX - rotatedZ * sinX
          const depth = point.y * sinX + rotatedZ * cosX
          const scale = 1.1 / (1.9 - depth)

          return {
            x: centerX + rotatedX * radius * scale,
            y: centerY + rotatedY * radius * scale,
            depth,
            size: point.size * scale,
            phase: point.phase,
          }
        })
        .sort((first, second) => first.depth - second.depth)

      context.save()
      context.globalCompositeOperation = 'lighter'

      const glow = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.08,
        centerX,
        centerY,
        radius * 1.12,
      )
      glow.addColorStop(0, 'rgba(147, 255, 202, 0.18)')
      glow.addColorStop(0.45, 'rgba(87, 216, 174, 0.08)')
      glow.addColorStop(1, 'rgba(8, 14, 14, 0)')
      context.fillStyle = glow
      context.beginPath()
      context.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2)
      context.fill()

      context.strokeStyle = 'rgba(142, 249, 199, 0.2)'
      context.lineWidth = 1
      for (let index = 0; index < projected.length; index += 1) {
        const point = projected[index]
        for (let nextIndex = index + 1; nextIndex < projected.length; nextIndex += 1) {
          const nextPoint = projected[nextIndex]
          const distance = Math.hypot(point.x - nextPoint.x, point.y - nextPoint.y)

          if (distance < radius * 0.34 && point.depth > -0.35 && nextPoint.depth > -0.35) {
            context.globalAlpha = Math.max(0, (0.28 - distance / radius) * 1.4)
            context.beginPath()
            context.moveTo(point.x, point.y)
            context.lineTo(nextPoint.x, nextPoint.y)
            context.stroke()
          }
        }
      }

      projected.forEach((point) => {
        const pulse = 1 + Math.sin(time * 0.002 + point.phase) * 0.25
        context.globalAlpha = Math.max(0.16, point.depth + 0.55)
        context.fillStyle = point.depth > 0.15 ? '#b5ffdc' : '#4ac7a0'
        context.beginPath()
        context.arc(point.x, point.y, point.size * pulse, 0, Math.PI * 2)
        context.fill()
      })

      context.globalAlpha = 1
      context.strokeStyle = 'rgba(181, 255, 220, 0.5)'
      context.lineWidth = 1
      context.setLineDash([2, 8])
      context.beginPath()
      context.arc(centerX, centerY, radius * 1.22, frame * 3, frame * 3 + Math.PI * 1.24)
      context.stroke()
      context.beginPath()
      context.arc(centerX, centerY, radius * 1.08, -frame * 2, -frame * 2 + Math.PI * 0.8)
      context.stroke()
      context.restore()

      animationFrame = requestAnimationFrame(render)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointerRef.current = {
        x: (event.clientX - bounds.left) / bounds.width * 2 - 1,
        y: (event.clientY - bounds.top) / bounds.height * 2 - 1,
      }
    }

    const resetPointer = () => {
      pointerRef.current = { x: 0, y: 0 }
    }

    resize()
    animationFrame = requestAnimationFrame(render)
    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerleave', resetPointer)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerleave', resetPointer)
    }
  }, [])

  return (
    <div className="security-orb" aria-label="Interactive cybersecurity telemetry visualization">
      <canvas ref={canvasRef} />
      <div className="orb-readout orb-readout-top">
        <span>LIVE NODE</span>
        <strong>ACTIVE</strong>
      </div>
      <div className="orb-readout orb-readout-bottom">
        <span>THREAT SURFACE</span>
        <strong>MONITORED</strong>
      </div>
      <div className="orb-crosshair" aria-hidden="true" />
    </div>
  )
}

export default SecurityOrb