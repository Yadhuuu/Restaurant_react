import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Review from './Review'

function Detailes() {
    const [data, setData] = useState([])
    const params = useParams()
    useEffect(() => {
        const fetchData = async () => {
            await fetch('/restaurants.json')
                .then((res) => res.json())
                .then((data) => setData(data.restaurants))
        }
        fetchData()

    }, [])
    const detailes = data.find((i) => i.id == params.id)
    console.log(detailes);



    return (
        <div>
            <Link className='btn btn-outline-dark rounded my-2 btn-sm' to="/">Back</Link>

            {detailes ? (
                <Row className="my-3">
                    <Col md={3}>
                        <Image className='img' src={detailes.photograph} alt={detailes.name} fluid />
                    </Col>

                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h2>{detailes.name}</h2>
                                <p>{detailes.neighborhood}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Cuisine:{detailes.cuisine_type}</p>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Address:{detailes.address}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Operatinh hours</h4>
                                <p>Monday:{detailes.operating_hours.Monday}</p>
                                <p>Tuesday:{detailes.operating_hours.Tuesday}</p>
                                <p>Wednesday:{detailes.operating_hours.Wednesday}</p>
                                <p>Thursday:{detailes.operating_hours.Thursday}</p>
                                <p>Friday:{detailes.operating_hours.Friday}</p>
                                <p>Saturday:{detailes.operating_hours.Saturday}</p>
                                <p>Sunday:{detailes.operating_hours.Sunday}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                <Row>
                    <Card className="my-3 mx-3 p-3 rounded">
                           <Review data={detailes.reviews}/>
                    </Card>
                </Row>
                  
                  
                </Row>
            ) : null}


        </div>
    )
}

export default Detailes