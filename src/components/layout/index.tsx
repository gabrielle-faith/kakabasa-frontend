import React from 'react'
import type { ILayoutProps } from '@/types/layout/Layout'
import Navbar from './Navbar'

const Layout = ({
  isNavbarVisible = false,
  children,
}: ILayoutProps): React.ReactElement => {
  return (
    <div>
      {isNavbarVisible && <Navbar />}
      <main>{children}</main>
    </div>
  )
}

export default Layout
