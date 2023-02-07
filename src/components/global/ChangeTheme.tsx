import { FC, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BiSun, BiMoon } from 'react-icons/bi'
import { IoPartlySunny, IoMoon } from 'react-icons/io5'

const ChangeTheme: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleSwitch = () => setIsDarkMode((prev) => !prev)

  return (
    <motion.div
      layout
      layoutRoot
      className="switch"
      data-isdark={isDarkMode}
      onClick={toggleSwitch}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className="theme-icon"
      >
        {isDarkMode ? (
          <motion.div
            initial={{ opacity: 0, color: '#4F5D75' }}
            animate={{ opacity: 1, color: '#FFFFFF' }}
          >
            <IoMoon size={28} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, color: '#FFFFFF' }}
            animate={{ opacity: 1, color: '#4F5D75' }}
          >
            <IoPartlySunny size={28} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ChangeTheme
