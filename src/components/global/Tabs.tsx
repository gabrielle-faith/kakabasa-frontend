import { FC, useState } from 'react'
import { motion } from 'framer-motion'

const tabs: string[] = ['Ranking', 'Players']

const Tabs: FC = () => {
  // const [selectedTab, setSelectedTab] = useState<number>(0)
  const [isOpen, setOpen] = useState<boolean>(false)

  return (
    <motion.div
      layout
      style={{ height: isOpen ? '100px' : '500px', width: '500px' }}
      onClick={() => setOpen(!isOpen)}
      className="bg-custom_secondary border-b-4 border-custom_primary"
    />
  )
}

export default Tabs
