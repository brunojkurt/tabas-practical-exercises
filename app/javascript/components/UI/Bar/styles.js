import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Bar = styled.div`
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
  top: 0;
  width: 100%;
  height: 72px;
  background-color: #000;
  display: flex;
  justify-content: center;
`
export const LogoWrapper = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`
export const Logo = styled.img`
  src: ${({ src }) => src};
  height: 60%;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  max-width: 1122px;
  width: 100%;
`
export const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: center;
`
export const NavItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const NavLink = styled(Link)`
  color: #FFF;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;
  text-decoration: none;
`