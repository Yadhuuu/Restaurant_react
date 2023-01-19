import React from 'react'
import { useState, useEffect } from 'react'
import Restaurantscard from './Restaurantscard';
import { Row, Col } from 'react-bootstrap'


function Home() {
  const [restaurants, setRestaurants] = useState([]);

  async function fetchData() {
    await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((data) => setRestaurants(data.restaurants))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(restaurants);



  return (
    <Row>
      {restaurants ?
        restaurants?.map(restaurant => (
          <Col sm={12} md={8} lg={6} xl={3}>

            <Restaurantscard item={restaurant} />

          </Col>
        )) : null}


    </Row>
  )
}

export default Home