import React from 'react'

const CallBoxes = () => {
  return (
    <section class="container call-boxes">
    <div class="container box-grid">
        <div class="boxes">
            <i class="fa-solid fa-location-dot"></i>
            <h2>Visit us</h2>
            <p>Sveavägen 31 111 34 STOCKHOLM</p>
        </div>
        <div class="boxes">
            <i class="fa-solid fa-phone"></i>
            <h2>Call us</h2>
            <p>+46 (8) 121 470 50<br />+46 (8) 121 470 51</p>
        </div>
        <div class="boxes">
            <i class="fa-solid fa-envelope"></i>
            <h2>Email us</h2>
            <p>info@crito.com<br />support@crito.com</p>
        </div>
    </div>
</section>
  )
}

export default CallBoxes