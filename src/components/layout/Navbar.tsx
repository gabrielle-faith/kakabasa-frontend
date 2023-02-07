import React from 'react'
import { motion, Variants } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'
import { IoBookSharp } from 'react-icons/io5'
import ChangeTheme from '../global/ChangeTheme'

const containerVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
}

const Navbar = (): React.ReactElement => {
  return (
    <motion.div
      className="navbar"
      initial="initial"
      animate="animate"
      whileHover="whilehover"
      variants={containerVariants}
    >
      <motion.button
        type="button"
        className="h-fit w-fit text-custom_primary"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <IoBookSharp />
      </motion.button>
      {/* <motion.button
        type="button"
        className="h-fit w-fit text-custom_primary"
        initial={{ x: 100, scale: 1 }}
        animate={{ x: 0, transition: { type: 'spring' } }}
        whileHover={{ scale: 1.2 }}
      >
        <FaUserCircle />
      </motion.button> */}
      <ChangeTheme />
    </motion.div>
  )
}

export default Navbar
