import React from 'react'
import { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon } from './styles'

const Checkbox = (props) => {

  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} readOnly/>
      <StyledCheckbox {...props}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
}

export default Checkbox