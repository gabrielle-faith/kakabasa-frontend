import React from 'react'
import type { NextPage } from 'next'
import Layout from '@/components/layout'
import HeroContainer from '@/components/modules/landing-page/HeroContainer'

const LandingPage: NextPage = () => {
  return (
    <>
      <Layout isNavbarVisible>
        <HeroContainer />
      </Layout>
    </>
  )
}

export default LandingPage
