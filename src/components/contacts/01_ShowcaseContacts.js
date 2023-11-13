import React from 'react'
import backgroundLines from '../../assets/images/background-lines.svg'

const ShowcaseContacts = () => {
  return (
    <section class="showcase-contacts">
    <div class="container"> 
        <div class="content">
            <ul class="breadcrumbs">
                <li><a href="/index.html">Home</a></li>
                <li><a href="/contacts.html">Contacts</a></li>
            </ul>            
            <h1>Let's Connect</h1>
        </div>
    </div>

    <div class="lines">
        <img src={backgroundLines} alt="background lines" />
    </div>
</section>
  )
}

export default ShowcaseContacts