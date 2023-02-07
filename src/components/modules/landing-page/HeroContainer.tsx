import React, { useId } from 'react'
// import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
// import girl_reading_book from '@/assets/image/undraw_Reading_time_re_phf7.png'
import projectInfo from 'project-info'

const titleVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
}

const charVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const descriptionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 2 } },
}

const HeroContainer = (): React.ReactElement => {
  const id = useId()

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <motion.div
        initial="initial"
        animate="animate"
        variants={titleVariants}
        className="text-center"
      >
        {Array.from(projectInfo.title).map((str: string, idx: number) => (
          <motion.span
            key={id + str + idx}
            variants={charVariants}
            className="uppercase font-bold text-xl md:text-3xl text-custom_primary"
          >
            {str}
          </motion.span>
        ))}
        <motion.p variants={descriptionVariants} className="text-custom_dark">
          {projectInfo.description}
        </motion.p>
      </motion.div>
    </div>
  )
}

export default HeroContainer
