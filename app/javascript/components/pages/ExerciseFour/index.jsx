import React, { useState } from 'react'
import { Container } from '../../styles/global'
import { Bar } from '../../UI'
import { Button, Section } from './styles'
import api from '../../../services/api'

const ExerciseFour = () => {
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
      url: '/exercise_three',
      name: 'Exercise Three'
    },
  ]
  const dates = ["11 Aug 2020", "29 Jan", "27 Jan", "1 Dec 2022", "28 Jan"]
  const [formated, setFormated] = useState([])

  const handleTreat = async () => {
    await api.post('/date/format_many', { dates })
      .then(res => {
        const { data } = res
        setFormated(data)
      })
  }

  return (
    <>
      <Bar links={barLinks} />
      <Container size="lg">
        <Section>
          <h2>Array of dates to treat:</h2>
          <small>The dates will be sended to backend to be treated, returned and then displayed bellow.</small>
        </Section>

        <Section>
          <h3>{ JSON.stringify(dates) }</h3>
        </Section>

        <Section>
          <Button
            variant="outlined"
            color="#FFF"
            background="#000"
            onClick={() => handleTreat()}>
              Format
          </Button>
        </Section>

       <Section>
        { !!formated.length && (
          <>
            <h2>Treated dates:</h2>
            { JSON.stringify(formated) }
          </>
        ) }
       </Section>
      </Container>
    </>
  )
}

export default ExerciseFour