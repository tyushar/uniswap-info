import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Title from '../Title'
import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import { transparentize } from 'polished'
import { TYPE } from '../../Theme'
import { withRouter } from 'react-router-dom'
import { TrendingUp, List, PieChart, Disc, Home, Link } from 'react-feather'
import Link2 from '../Link'
import { useSessionStart } from '../../contexts/Application'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import Toggle from '../Toggle'
import Overviewicon from '../../assets/overview.png'
import Tokensicon from '../../assets/tokens.png'
import Pairsicon from '../../assets/pairs.png'
import Accounticon from '../../assets/account.png'
const Wrapper = styled.div`
  height: ${({ isMobile }) => (isMobile ? 'initial' : '100vh')};
  background-color: ${({ theme }) => transparentize(0.4, theme.bg1)};
  color: ${({ theme }) => theme.text1};
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: sticky;
  top: 0px;
  z-index: 9999;
  box-sizing: border-box;
  border-radius: 8px;
  /* background-color: #1b1c22; */
  background: ${({ theme }) => theme.bg7};
  color: ${({ theme }) => theme.bg2};

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    position: relative;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`

const Option = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: white;
  display: flex;
  border-radius: .375rem;
  box-sizing: border-box;
  padding-top: .4rem;
  padding-bottom: .4rem;
  :hover {
    display: flex;
    background-color: #FFFFFF;
    color: #60b8ff;
  }
`

const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.div`
  margin-right: 0.75rem;
  font-size: 0.825rem;
  font-weight: 600;
  display: inline-box;
  display: -webkit-inline-box;
  :hover {
    opacity: 1;
  }
  a {
    color: white;
  }
`

const Polling = styled.div`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  padding: 1rem;
  color: white;
  opacity: 2;
  transition: opacity 0.25s ease;
  :hover {
    opacity: 1;
  }
`
const PollingDot = styled.div`
  width: 8px;
  height: 8px;
  min-height: 8px;
  min-width: 8px;
  margin-right: 0.5rem;
  margin-top: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.red1};
`

function SideNav({ history }) {
  const below1080 = useMedia('(max-width: 1080px)')

  const below1180 = useMedia('(max-width: 1180px)')

  const seconds = useSessionStart()

  const [isDark, toggleDarkMode] = useDarkModeManager()

  return (
    <Wrapper isMobile={below1080}>
      {!below1080 ? (
        <DesktopWrapper>
          <AutoColumn gap="1rem" style={{ marginLeft: '.75rem', marginTop: '1.5rem' }}>
            <Title />
            {!below1080 && (
              <AutoColumn gap="0.5rem" style={{ marginTop: '1rem' }}>
                <BasicLink to="/home">
                  <Option activeText={history.location.pathname === '/home' ?? undefined}>
                    <img width={'22px'} style={{ marginLeft: '4px', marginTop: '0px' }} src={Overviewicon} alt="logo" />
                    &nbsp;&nbsp;
                    Overview
                  </Option>
                </BasicLink>
                <BasicLink to="/tokens">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'tokens' ||
                        history.location.pathname.split('/')[1] === 'token') ??
                      undefined
                    }
                  >
                    <img width={'24px'} style={{ marginLeft: '4px', marginTop: '0px' }} src={Tokensicon} alt="logo" />
                    &nbsp;&nbsp;
                    Tokens
                  </Option>
                </BasicLink>
                <BasicLink to="/pairs">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'pairs' ||
                        history.location.pathname.split('/')[1] === 'pair') ??
                      undefined
                    }
                  >
                    <img width={'24px'} style={{ marginLeft: '4px', marginTop: '0px' }} src={Pairsicon} alt="logo" />
                    &nbsp;&nbsp;
                    Pairs
                  </Option>
                </BasicLink>

                <BasicLink to="/accounts">
                  <Option
                    activeText={
                      (history.location.pathname.split('/')[1] === 'accounts' ||
                        history.location.pathname.split('/')[1] === 'account') ??
                      undefined
                    }
                  >
                    <img width={'22px'} style={{ marginLeft: '5px', marginTop: '0px' }} src={Accounticon} alt="logo" />
                    &nbsp;&nbsp;
                    Accounts
                  </Option>
                </BasicLink>
              </AutoColumn>
            )}
          </AutoColumn>
          <AutoColumn gap="0.5rem" style={{ marginLeft: '.75rem', marginBottom: '4rem' }}>
            <HeaderText>
              <Link2 href="https://Trams.io" target="_blank">
                🚉 Trams.io
              </Link2>
            </HeaderText>
            <HeaderText>
              <Link2 href="https://v1.uniswap.info" target="_blank">
                📈 V1 Analytics
              </Link2>
            </HeaderText>
            <HeaderText>
              <Link2 href="https://uniswap.org/docs/v2" target="_blank">
                📝 Docs
              </Link2>
            </HeaderText>
            <HeaderText>
              <Link2 href="https://discord.com/invite/XErMcTq" target="_blank">
                🧿 Discord
              </Link2>
            </HeaderText>
            <HeaderText>
              <Link2 href="https://twitter.com/UniswapProtocol" target="_blank">
                🐤 Twitter
              </Link2>
            </HeaderText>
            <Toggle isActive={isDark} toggle={toggleDarkMode} />
          </AutoColumn>
          {!below1180 && (
            <Polling style={{ marginLeft: '.5rem' }}>
              <PollingDot />
              <a href="/" style={{ color: 'black' }}>
                <TYPE.small color={'black'}>
                  Updated {!!seconds ? seconds + 's' : '-'} ago <br />
                </TYPE.small>
              </a>
            </Polling>
          )}
        </DesktopWrapper>
      ) : (
          <MobileWrapper>
            <Title />
          </MobileWrapper>
        )}
    </Wrapper>
  )
}

export default withRouter(SideNav)
