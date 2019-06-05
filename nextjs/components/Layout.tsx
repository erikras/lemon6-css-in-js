import * as React from 'react'
import Link from '../components/Link'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'
import { SerializedStyles } from '@emotion/serialize'
import { ThemeProvider } from 'emotion-theming'

type Props = {
  title?: string
}

const theme = {
  primary: 'blue',
  secondary: 'darkgreen',
  headerMargin: 50
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title'
}) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: sans-serif;
        }
      `}
    />
    <Header>
      <Nav>
        <NavLink href="/">Home</NavLink> |{' '}
        <NavLink href="/about">About</NavLink> |{' '}
        <NavLink href="/initial-props">With Initial Props</NavLink>
      </Nav>
    </Header>
    <Content>{children}</Content>
    <hr />
    <Footer>
      <span>I'm here to stay (Footer)</span>
    </Footer>
  </ThemeProvider>
)

const breakpoints: Record<string, number> = {
  phone: 414,
  tablet: 768,
  laptop: 990,
  desktop: 1200
}

type Styler = (styles: SerializedStyles) => SerializedStyles
type MediaQueries = {
  [name: string]: Styler
}

const mediaQuery: MediaQueries = Object.keys(breakpoints).reduce(
  (result: MediaQueries, name) => {
    result[name] = styles => css`
      @media (min-width: ${breakpoints[name]}px) {
        ${styles}
      }
    `
    return result
  },
  {}
)
const Header = styled.header`
    padding: 25px;
    background-color: aquamarine;
    ${mediaQuery.phone(css`
      background-color: beige;
    `)}
    ${mediaQuery.tablet(css`
      background-color: yellow;
    `)}
    ${mediaQuery.laptop(css`
      background-color: blueviolet;
    `)}
    ${mediaQuery.desktop(css`
      background-color: burlywood;
    `)}
  `
const Nav = styled.nav``

const NavLink = styled(Link)({
  fontWeight: 'bold',
  '&:hover': {
    color: 'blue'
  }
})

const Content = styled.div`
  padding: 10px 20px;
`
const Footer = styled.footer`
  padding: 10px 20px;
`
export default Layout
