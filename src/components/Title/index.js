import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo_white.png'
import Wordmark from '../../assets/wordmark_white.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <img width={'50px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Wordmark} alt="logo" />
          <text style={{ color: 'black', fontSize: '16px', fontWeight: '600', fontStyle: "oblique" }}>TRAMS DEX</text>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
