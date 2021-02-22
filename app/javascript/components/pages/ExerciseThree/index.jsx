import React, { useState } from 'react'
import { Container, Paper, FormItem, CheckboxLabel, Button, DataList, DataItem } from './styles'
import { Bar, TextField, Select, Checkbox, DatePicker } from '../../UI'
import { HiBadgeCheck } from 'react-icons/hi'
import moment from 'moment'

const ExerciseThree = () => {
  const [state, setState] = useState({
    name: '',
    lastname: '',
    birth_date: '',
    property_type: '',
    elevator: false,
    doorman: false,
    pet_allowed: false
  })
  const [subscribed, setSubscribed] = useState(false)
  const barLinks = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/properties',
      name: 'Properties'
    },
    {
      url: '/exercise_four',
      name: 'Exercise Four'
    },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <>
      <Bar links={barLinks} />
      <Container size="lg">
        <Paper shadow>
          { !subscribed ? (
            <form onSubmit={(e) => handleSubscribe(e)}>
              <h3>Subscription</h3>
              <FormItem>
                <TextField
                  label="Name"
                  onChange={(e) => setState(state => ({ ...state, name: e.target.value }))}
                  value={state.name}
                  required
                  w100/>
              </FormItem>
              <FormItem>
                <TextField
                  label="Lastname"
                  onChange={(e) => setState(state => ({ ...state, lastname: e.target.value }))}
                  value={state.lastname}
                  required
                  w100/>
              </FormItem>
              <FormItem>
                <DatePicker
                  label="Birth Date"
                  onChange={(date) => setState(state => ({ ...state, birth_date: moment(date[0]).format('LL') }))}
                  value={state.birth_date}
                  required
                  w100/>
              </FormItem>
              <FormItem>
                <Select
                  label="Property type"
                  onChange={(e) => setState(state => ({ ...state, property_type: e.target.value }))}
                  value={state.property_type}
                  required
                  w100>
                  <option value="House">House</option>
                  <option value="Apartment">Apartment</option>
                </Select>
              </FormItem>
              <FormItem>
                <Checkbox
                  id="elevator"
                  checked={state.elevator}
                  onChange={(e) => setState(state => ({ ...state, elevator: e.target.checked }))} />
                <CheckboxLabel htmlFor="elevator">Elevator</CheckboxLabel>
              </FormItem>
              <FormItem>
                <Checkbox
                  id="doorman"
                  checked={state.doorman}
                  onChange={(e) => setState(state => ({ ...state, doorman: e.target.checked }))} />
                <CheckboxLabel htmlFor="doorman">Doorman</CheckboxLabel>
              </FormItem>
              <FormItem>
                <Checkbox
                  id="pet_allowed"
                  checked={state.pet_allowed}
                  onChange={(e) => setState(state => ({ ...state, pet_allowed: e.target.checked }))} />
                <CheckboxLabel htmlFor="pet_allowed">Pet Allowed</CheckboxLabel>
              </FormItem>
              <Button
                variant="outlined"
                type="submit"
                color="#FFF"
                background="#000"
                ripple
                w100> Submit</Button>
            </form>
          ) : (
            <DataList>
              <DataItem>
                <h2><HiBadgeCheck size={28} />Subscribed</h2>
              </DataItem>
              <DataItem>
                {`Name: ${state.name}`}
              </DataItem>
              <DataItem>
                {`Lastname: ${state.lastname}`}
              </DataItem>
              <DataItem>
                {`Birth Date: ${state.birth_date}`}
              </DataItem>
              <DataItem>
                {`Property Type: ${state.property_type}`}
              </DataItem>
              <DataItem>
                {`Elevator: ${state.elevator ? 'Yes' : 'No'}`}
              </DataItem>
              <DataItem>
                {`Doorman: ${state.doorman ? 'Yes' : 'No'}`}
              </DataItem>
              <DataItem>
                {`Pet Allowed: ${state.pet_allowed ? 'Yes' : 'No'}`}
              </DataItem>
            </DataList>
          ) }
        </Paper>
      </Container>
    </>
  )
}

export default ExerciseThree