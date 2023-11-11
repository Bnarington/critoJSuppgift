import React from 'react'

import backgroundLines from '../assets/images/background-lines.svg'
import suitMan from '../assets/images/Image.svg'

const Showcase = () => {
  return (
    <section className="showcase">
            <div className="container"> 
                <div className="content">            
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="btn-ylw" href="consulting.html">Get Consulting<i className="fa-regular fa-arrow-up-right"></i> </a>
                    <a className="btn-transparent" href="services.html">Learn more<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>
                <img src={suitMan} alt="A man in a suit looking down to the right on a tablet, looking confounded." />

            </div>

            <div>
                <img src={backgroundLines} alt="background lines" />
            </div>
        </section>
  )
}

export default Showcase