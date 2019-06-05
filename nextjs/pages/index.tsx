import * as React from 'react'
import Link from '../components/Link'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import styled from '@emotion/styled'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1
        css={theme => ({
          color: 'red',
          margin: theme.headerMargin
        })}
      >
        Hello Next.js 👋
      </h1>

      <p>
        <BigLink href="/about">About</BigLink>
      </p>
    </Layout>
  )
}

const BigLink = styled(Link)`
  font-size: 3em;
  margin: 100px;
  &:hover {
    color: ${props => props.theme.primary};
  }
`

export default IndexPage
