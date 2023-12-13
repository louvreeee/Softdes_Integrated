import { useNav } from "../hooks/useNav"
import React from "react"
import '../styles/Body.css';


  

const Home = () => {
  const homeRef = useNav("Home")

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <section ref={homeRef} id="homeSection" className="home">
      <img src="./home-image.jpg" />
      
    </section>
  )
}

export default Home