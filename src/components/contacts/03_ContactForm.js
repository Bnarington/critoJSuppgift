import React from 'react'
import '../../styles/contacts_styles/03_ContactForm.css'

const ContactForm = () => {
  return (
    <section className="contact-form">
        <div className="container wrapper">
            <form action="">
                <fieldset>
                    <label htmlFor="information">Leave us a message for any information.</label>
                    <input type="text" placeholder="Name*" />
                    <input type="text" placeholder="Email*" />
                    <textarea id="message" name="message" placeholder="Your message*" rows="4" required></textarea>
                    <button className="btn-ylw">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                </fieldset>
            </form>
        </div>
    </section>
  )
}

export default ContactForm