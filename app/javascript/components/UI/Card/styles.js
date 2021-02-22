import styled from 'styled-components'

export const CardBase = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  height: 250px;
  margin: 8px;
  background-color: #FFF;
`
export const CardImage = styled.div`
  background: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 200px;
`
export const CardTitle = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  padding: 0 8px;
`