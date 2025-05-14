import React from 'react'
import '../css/Home.css'
const Home = () => {
  return (
  <div className="home-container">
    <div className="slideshow-container">
    <div className="slide fade"><img src="/src/images/img7.jpeg" alt="Slide 1" /></div>
    <div className="slide fade"><img src="/src/images/img5.jpg" alt="Slide 2" /></div>
    <div className="slide fade"><img src="/src/images/img6.jpg" alt="Slide 3" /></div>
    <div className="slide fade"><img src="/src/images/img10.jpg" alt="Slide 4" /></div>
  </div>

  <div className="container text-center mt-4">
    <h1>Welcome to Product Management App</h1>
    <p>Use the navbar to navigate through the app.</p>
  </div>
</div>

    )
}

export default Home