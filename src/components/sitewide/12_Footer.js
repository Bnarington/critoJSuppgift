import React from 'react'
import '../../styles/sitewide_styles/12_Footer.css'

import logo from '../../assets/images/Logo.png'
import backgroundLinesWhite from '../../assets/images/background-lines-white-right.svg'

const Footer = () => {
  return (
                <footer className="footer w-100">  
            <section className="btm-link w-100">

                <div className="container">
                    <div className="links logo grid-1">
                        <img src={logo} alt="Crito logo." />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>

                    <div className="links grid-2">
                        <h2>Company</h2>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>                    
                    </div>
                    <div className="links grid-3">
                        <h2>Help</h2>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="links grid-4">
                        <h2>Resources</h2>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                    <div className="links grid-5">
                        <h2>Link</h2>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                </div>

                <div className="lines">
                    <div><img src={backgroundLinesWhite} alt="" /></div>
                </div>
            </section>

            <section className="media-end">
                <div className="container">
                    <div className="copyright">© 2023 Crito - Consulting Company Inc. All Rights Reserved.</div>
                    <div className="socialmedia">
                        <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook pe-2"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter pe-2"></i></a>
                        <a href="https://instagram.com" target="_blank"> <i className="fa-brands fa-instagram pe-2"></i></a>
                        <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </footer>  
  )
}

export default Footer