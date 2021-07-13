import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImgSlider = () => {
    return (
        <div>
             <Carousel className="mt-1">
            <Carousel.Item>
                <img
                style={{height:'90vh', width:'100vw', justifyContent:'center'}}
                className="d-block"
                src="https://images.unsplash.com/photo-1583573636246-18cb2246697f?ixid=MnwxMjA3fDB8MHxwaG100by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=895&q=80"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                style={{height:'90vh', width:'100vw'}}
                alt="Second Slide"
                src="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=853&q=80"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block"
                style={{height:'90vh', width:'100vw'}}
                src="https://images.unsplash.com/photo-1603946877690-d410437c29aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}

export default ImgSlider;
