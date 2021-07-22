import React from 'react'
import watch from '../Images/watch.webp'
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap'
import './HomePage.style.css'

const HomePage = () => {

    return (
        <>
            <div className="image-text">
                <div className="first-text">
                    <h1>Select Your New <br /> Perfect Style</h1>
                    <button className="shop-btn"> Shop Now</button>
                </div>

                <div className="first-img">
                    <img src={watch} alt="watch"/>
                </div>
            </div>   
            {/*------------------------------------ //new arrival------------------------------------------------------------ */}
            <div className="new-arrival">
                <h2 className="pt-5 text-center">New Arrivals</h2>
                <Container>
                    <Row>
                        <Col xs={12} md={12} lg={24}>
                        <Carousel>
                        <Carousel.Item interval={1000}>
                            <Row lg={24} >
                              <Col xs={4} md={4} lg={4}>
                                    <Card style={{ width:'20rem', height:'28rem' }}>
                                        <Card.Img variant="top" style={{height:'18rem'}} 
                                        src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80" />
                                    <Card.Body>
                                    <Card.Title>Mobile Phones</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                    </Card>
                             </Col>
                           <Col xs={4} md={4} lg={4}>  
                                <Card style={{ width: '20rem' ,height:'28rem'}}>
                                    <Card.Img variant="top" style={{height:'18rem'}}
                                    src="https://images.unsplash.com/photo-1544807259-20d81cbd0766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80" />
                                    <Card.Body>
                                        <Card.Title>Mac Book</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={4} md={4} lg={4}>  
                                <Card style={{ width: '20rem', height:'28rem' }}>
                                    <Card.Img variant="top" style={{height:'18rem'}}
                                     src="https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                                    <Card.Body>
                                        <Card.Title>Men Watches</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>


                        <Carousel.Item interval={1000}>
                            <Row lg={24} >
                              <Col xs={4} md={4} lg={4}>
                                    <Card style={{ width:'20rem', height:'28rem' }}>
                                        <Card.Img variant="top" style={{height:'18rem'}} 
                                        src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80" />
                                    <Card.Body>
                                    <Card.Title>Wireless Airpods</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    </Card.Body>
                                    </Card>
                             </Col>
                           <Col xs={4} md={4} lg={4}>  
                                <Card style={{ width: '20rem' ,height:'28rem'}}>
                                    <Card.Img variant="top" style={{height:'18rem'}}
                                    src="https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
                                    <Card.Body>
                                        <Card.Title>Wireless Headphones</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                                <Col xs={4} md={4} lg={4}>  
                                <Card style={{ width: '20rem', height:'28rem' }}>
                                    <Card.Img variant="top" style={{height:'18rem'}}
                                     src="https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" />
                                    <Card.Body>
                                        <Card.Title>Electronic Bands</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/*--------------------------------------------- Grid---------------------------------------------------- */}

            <div className="images-grid">
                <Row>
                    <Col xs={6} md={6} lg={4} xl={6}>
                        <img src="https://images.unsplash.com/photo-1584208124193-df98a65afaf6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=417&q=80"
                            alt="grid-img1"
                            className="img-grid img-unique"
                        />
                    </Col>
                    <Col xl={3} lg={4} md={6} sm={6}>
                        <img src="https://images.unsplash.com/photo-1589100018927-294eacf7ebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
                        alt="grid-img2" 
                        className="img-grid img-big"
                        />
                    </Col>
                    <Col xl={3} lg={4} md={12}>
                        <Row>
                            <Col xl={12} lg={10} md={6} sm={6}>
                                <img src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
                                 alt="grid-img3"
                                 className="img-grid img-small" />
                            </Col>
                            <Col xl={12} lg={12} md={6} sm={6}>
                            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                            alt="grid-img4"
                            className="img-grid img-small"  />
                        </Col>
                        </Row>
                       
                    </Col>
                </Row>
            </div>

            {/* --------------------------------------Popular Items------------------------------------------ */}
            <div className="popular-items">
                <h2>Popular Items</h2>
            </div>
        </>
    )
}

export default HomePage
