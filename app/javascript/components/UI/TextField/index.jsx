import React, { forwardRef } from 'react'
import { Wrapper, InputBase, LabelBase } from './styles'

const TextField = forwardRef((props, ref) => {
  const { label, placeholder, required, w100 } = props

  return (
    <Wrapper w100={w100}>
      <InputBase
        ref={ref}
        placeholder={ placeholder || ' ' }
        {...props}/>
        <LabelBase className="label-name">
          { label && (
            <span className="content-name">{`${label} ${required ? '*' : ''}`}</span>
          )}
        </LabelBase>
    </Wrapper>
  );
})

export default TextField