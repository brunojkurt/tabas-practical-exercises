import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/dark.css'
import TextField from '../TextField'

const DatePicker = (props) => {
  const { onChange } = props
  return <Flatpickr
    style={{ width: '100% '}}
    options={{
      dateFormat: 'd/m/Y'
    }}
    onChange={onChange}
    render={
      ({defaultValue, value, ...pickerProps}, ref) => {
        return <TextField ref={ref} {...pickerProps} {...props } />
      }
    }
  />
}

export default DatePicker