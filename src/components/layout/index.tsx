import React from 'react'
import { Inter } from '@next/font/google'
import type { ILayoutProps } from '@/types/layout/Layout'
import Navbar from './Navbar'
import classNames from '@/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({
  isNavbarVisible = false,
  children,
}: ILayoutProps): React.ReactElement => {
  return (
    <div className={classNames(inter.className)}>
      {isNavbarVisible && <Navbar />}
      <main>{children}</main>
    </div>
  )
}

export default Layout
