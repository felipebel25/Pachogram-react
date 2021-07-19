import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Subtitle } from './style'
const Layout = ({ children, title, subtitle, verDatos = true }) => {
  return (
    <>
      <Helmet>
        {title && <title>Pachogram 😲 | {title}</title>}
        {subtitle && <meta name='description' content={subtitle} />}
      </Helmet>
      <Div>
        {(title && verDatos) && <Title>{title}</Title>}
        {(subtitle && verDatos) && <Subtitle>{subtitle} 👋</Subtitle>}
        {children}
      </Div>
    </>
  )
}

export default Layout
