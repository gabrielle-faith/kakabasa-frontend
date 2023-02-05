import { NextSeoProps } from 'next-seo'
import projectInfo from 'project-info'

const { title, description } = projectInfo

const Seo: NextSeoProps = {
  titleTemplate: `${title} | %s`,
  defaultTitle: `${title}`,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    siteName: `${title}`,
    description,
  },
}

export default Seo
