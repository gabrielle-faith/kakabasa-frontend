import React from 'react'
import type { ILayoutProps } from '@/types/layout/Layout'
import Navbar from './Navbar'

const Layout = ({
  isNavbarVisible = false,
  children,
}: ILayoutProps): React.ReactElement => {
  return (
    <>
      {isNavbarVisible && <Navbar />}
      <main className="h-full">{children}</main>
    </>
  )
}

export default Layout
