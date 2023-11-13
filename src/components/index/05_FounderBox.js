import React from 'react'
import '../../styles/index_styles/05_FounderBox.css'
import happyWoman from '../../assets/images/Image-13.jpg'

const FounderBox = () => {
  return (
    <section  className="founder-box">
    <div className="blue-box-parent container">
        <img className="happy-woman-img" src={happyWoman} alt="Picture of a woman walking with laptop in an office enviroment, she looks happy." />
        <div className="blue-box"> <span className="span-name">Samantha Brown, <span className="span-orange">Founder</span></span><br /><br /><span className="span-lorem">"Lorem ipsum dolor sit, amet consectetur adipisicing elit."</span></div>

        <div className="about-company-box">
            <div className="section-title">
                <p>About Comapny</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
            </div>

            <div className="about-company-lorem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </div>
            <div className="about-company-lorem2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos. </div>
            <button className="btn-ylw">Learn More<i className="fa-regular fa-arrow-up-right"></i></button>
            <button className="btn-intro"><span><i className="fa-sharp fa-solid fa-play"></i></span>Intro Video</button>
        </div>
    </div>
   
</section>
  )
}

export default FounderBox