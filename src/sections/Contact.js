import { useNav } from "../hooks/useNav"
import '../styles/Body.css';
import React from "react"
const Contact = () => {
  const bookingRef = useNav("Contact")

  return (
    <section ref={bookingRef} id="contactSection" className="Contact">
      <div className="ContactImage">
        <img src="./LOGO2.png"/>
      </div>
      <div className="ContactText">
        <h2>Reserve your machines now!→ swiftlaundry@gmail.com</h2>
        
      </div>
      
    </section>
  )
}

export default Contact