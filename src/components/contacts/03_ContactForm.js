import React from 'react'

const ContactForm = () => {
  return (
    <section class="contact-form">
        <div class="container wrapper">
            <form action="">
                <fieldset>
                    <label for="information">Leave us a message for any information.</label>
                    <input type="text" placeholder="Name*" />
                    <input type="text" placeholder="Email*" />
                    <textarea id="message" name="message" placeholder="Your message*" rows="4" required></textarea>
                    <button class="btn-ylw">Send Message<i class="fa-regular fa-arrow-up-right"></i></button>
                </fieldset>
            </form>
        </div>
    </section>
  )
}

export default ContactForm