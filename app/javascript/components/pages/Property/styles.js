import styled from 'styled-components'
import { Button as ButtonBase } from '../../UI'

export const PageTitle = styled.h1`
  margin: 15px;
`
export const Container = styled.main`
  min-height: 100%;
  background-color: #E2E2E2;
  padding: 8px 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const LoadButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
`
export const Button = styled(ButtonBase)`
  border-radius: 0;
`