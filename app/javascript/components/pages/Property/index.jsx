import React, { useEffect, useState } from 'react'
import { PageTitle, Container, LoadButtonWrapper, Button } from './styles'
import { Bar, Card } from '../../UI'
import api from '../../../services/api'

const Property = () => {
  const [properties, setProperties] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [noMore, setNoMore] = useState(false)
  const barLinks = [
    {
      url: '/',
      name: 'Home'
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

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true)
      await api.get(`/property`, { params: { page } })
        .then(res => {
          const { data } = res
          data.length < 20 && setNoMore(true)
          setProperties(state => {
            return state.concat(data)
          })
        })
      setLoading(false)
    }
    fetchProperties()
  }, [page])

  return (
    <>
      <Bar links={barLinks} />
      <PageTitle>
        Properties
      </PageTitle>
      <Container>
        { !!properties.length ? properties.map(property => (
          <Card
            key={property.id}
            title={`${property.id}.${property.name}`}
            imageUrl={property.photos[2].path} />
          )
        ) : (
          <h4>No properties found, make sure to run the commands "rails db:migrate" and "rails db:seed".</h4>
        ) }
        { (!noMore && !!properties.length) && (
          <LoadButtonWrapper>
            <Button
              onClick={() => setPage(current => current + 1)}
              variant="outlined"
              color="#FFF"
              background="#000"
              disabled={loading}
              ripple>
                {loading ? 'Loading...' : 'Load More'}
              </Button>
          </LoadButtonWrapper>
        ) }
      </Container>
    </>
  )
}

export default Property