import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

function InteractivePortrait() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [9, -9]), { stiffness: 180, damping: 18 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-11, 11]), { stiffness: 180, damping: 18 })

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.div
      className="profile-float"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      whileHover={{ scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      aria-label="Interactive profile portrait"
    >
      <div className="profile-float-depth" />
      <img src="/profile.jpg" alt="Bhavya - Cybersecurity Professional" />
      <div className="profile-float-content">
        <span>PORTRAIT / 01</span>
        <strong>SECURITY RESEARCH</strong>
      </div>
    </motion.div>
  )
}

export default InteractivePortrait
