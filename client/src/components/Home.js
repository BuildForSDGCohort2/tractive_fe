import React, { Component } from 'react';
import "./Home.css";
// import Carousel from 'react-bootstrap/Carousel'


// Animation

class Home extends Component {
  render() {
    return (
  
      // <Carousel>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="images/hero1.jpg"
      //       alt="First slide"
      //     />
      //     <Carousel.Caption>
          
      //       <h3>First slide label</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>

      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="images/hero1.jpg"
      //       alt="Third slide"
      //     />
      
      //     <Carousel.Caption>
      //       <h3>Second slide label</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
        
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="images/hero1.jpg"
      //       alt="Third slide"
      //     />
      
      //     <Carousel.Caption>
      //       <h3>Third slide label</h3>
      //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>

    <section className="hero">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white font-weight-bold">
            <h3 className="display-3">Welcome to Tractive</h3>
            <h2 className="mt-3"> We connect farmers looking for tractors with tractor owners looking for work</h2>
            <p><a href="/" class="btn btn-success btn-large morebtn">Learn more »</a></p>
          </div>
        </div>
      </div>

    </section>
      
    )
  }
}
export default Home; 