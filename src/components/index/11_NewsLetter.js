import React from 'react'
import '../../styles/index_styles/11_NewsLetter.css'
import backgroundWavy from '../../assets/images/background-wavy-lines.svg'

const NewsLetter = () => {
  return (
    <section className="newsletter w-100">
    <div className="wrapper w-100">
        <div className="form">
            <form action="#">
                <label for="mailadress">Get News Updates By Signup </label>
                <input type="text" placeholder="username@domain.com" />
                <button className="btn-ylw">Subscribe!<i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>

        <div className="lines">
            <img src={backgroundWavy} alt="" />
        </div>
    </div>       

</section>   
  )
}

export default NewsLetter