import React from 'react'
import '../css/contactUs.css'
import Navbar from '../components/Navbar'
const Contact = () => {
  return (
    <div>

<Navbar />
<div className='cnt'>
<div className="contactUs-container">
      <h2>Contact Us</h2>
      <h6>Let us know your questions, suggestions and concerns by filling out the contact form below.</h6>
      <form action="#" method="post">
        <input type="text" className="contactUs-input" placeholder="Name" required />
        <input type="email" className="contactUs-input" placeholder="Email" required />
        <input type="tel" className="contactUs-input" placeholder="Phone Number" required />
        <textarea className="contactUs-input" placeholder="Type your message here.." rows={4} required defaultValue={""} />
        <br /><br />
        <button type="submit" className="contactUs-button">Send Message</button>
      </form>
    </div>
    {/* Footer code */}
    <div className="fixed-footer">
      @ 2023 SKILLIFY, INC
    </div>
  </div>
</div>
  )
}

export default Contact