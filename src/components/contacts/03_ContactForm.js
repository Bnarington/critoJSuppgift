import React, {useState} from 'react'
import {useFormik} from 'formik'
import '../../styles/contacts_styles/03_ContactForm.css'
import Buttons from '../sitewide/Buttons'

const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const form = useFormik ({
    initialValues: {
      name: '',
      email:'',
      message:'',
    },

    onSubmit: async (values) => {
      const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values),
      })

      console.log(values)
      switch (result.status) {
        case 200:
          alert('Message has been sent!')
          break;
        case 400:
          setErrorMessage('Something went wrong!')
          break
      }
    }


  })

  return (
    <section className="contact-form">
        <div className="container wrapper">
            <form onSubmit={form.handleSubmit}>
                <fieldset>
                    <label htmlFor="information">Leave us a message for any information.</label>
                    <input type="text" name="name" placeholder="Name*" value={form.values.name} onChange={form.handleChange} />
                    <input type="email" name="email" placeholder="Email*" value={form.values.email} onChange={form.handleChange} />
                    <textarea id="message" name="message" placeholder="Your message*" rows="4" value={form.values.message} onChange={form.handleChange}  required></textarea>
                    <button type="submit" className="btn-ylw">Send Message<i className="fa-regular fa-arrow-up-right"></i></button>
                </fieldset>
            </form>
        </div>
    </section>
  )
}

export default ContactForm