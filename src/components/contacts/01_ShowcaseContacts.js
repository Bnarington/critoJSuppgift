import React from 'react'
import '../../styles/contacts_styles/01_ShowcaseContacts.css'
import backgroundLines from '../../assets/images/background-lines.svg'

const ShowcaseContacts = () => {
  return (
    <section className="showcase-contacts">
    <div className="container"> 
        <div className="content">
            <ul className="breadcrumbs">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/contacts.html">Contacts</a></li>
            </ul>            
            <h1>Let's Connect</h1>
        </div>
    </div>

    <div className="lines">
        <img src={backgroundLines} alt="background lines" />
    </div>
</section>
  )
}

export default ShowcaseContacts