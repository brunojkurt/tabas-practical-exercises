import React from 'react'
import { Bar } from '../../UI'
import { Container } from './styles'

const Home = () => {
  const barLinks = [
    {
      url: '/properties',
      name: 'Properties'
    },
    {
      url: 'exercise_three',
      name: 'Exercise Three'
    },
    {
      url: 'exercise_four',
      name: 'Exercise Four'
    },
  ]
  return (
    <>
      <Bar links={barLinks} />
      <Container size="lg">
        <h1>Tabas Practical Exercises</h1>
      </Container>
    </>
  )
}

export default Home