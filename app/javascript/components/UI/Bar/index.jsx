import React from 'react'
import { 
  Bar as BarBase,
  Nav,
  LogoWrapper,
  Logo,
  NavList,
  NavItem,
  NavLink
} from './styles'
import logo from 'images/logo.svg'

const Bar = (props) => {
  const { links, fixed } = props
  return (
    <BarBase fixed={fixed}>
      <Nav>
        <LogoWrapper href="/">
          <Logo src={logo} />
        </LogoWrapper>
        <NavList>
          { !!links?.length && links.map((link, index) => (
            <NavItem key={index}>
              <NavLink to={link.url}>{link.name}</NavLink>
            </NavItem>
          )) }
        </NavList>
      </Nav>
    </BarBase>
  )
}

export default Bar