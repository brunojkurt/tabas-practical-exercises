import styled from 'styled-components'
import { Button as ButtonBase } from '../../UI'
import { Container as ContainerBase } from '../../styles/global'

export const Container = styled(ContainerBase)`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
`
export const Paper = styled.div`
  flex: 1;
  max-width: 420px;
  width: auto;
  height: auto;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 10px;
  ${({shadow}) => shadow && `box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.5)` }
`
export const FormItem = styled.div`
  width: 100%;
  margin: 10px 0;
` 
export const CheckboxLabel = styled.label`
  font-size: 16px;
  color: #595f6e;
  margin-left: 5px;
  cursor: pointer;
`
export const Button = styled(ButtonBase)`
  border-radius: 0;
`
export const DataList = styled.ul`
  list-style: none;
`
export const DataItem = styled.ul`
  padding: 5px 0;
  svg {
    margin-right: 5px;
    margin-bottom: -5px;
  }
`