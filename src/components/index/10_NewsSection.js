import React from 'react'
import '../../styles/index_styles/10_NewsSection.css'
import image1 from '../../assets/images/Image.jpg'
import image2 from '../../assets/images/Group 1000004909.jpg'
import image3 from '../../assets/images/Group 1000004910.jpg'
import dot from '../../assets/images/dot.png'

const NewsSection = () => {
  return (
    <section className="news-section">
        <div className="container">
            <div className="section-title">
                <p>Article & News</p>
                <h2>Get Every Single Articles & News</h2>
            </div>

            <div>
                <button className="btn-transparent">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
        </div>

        <div className="container news-boxes">
            <div className="pictures">
                <img src={image1} alt="Woman sitting at a bench with date 25 of march." />
                <img src={image2} alt="Text on a screen." />
                <img src={image3} alt="A pile of books with a phone on top." />
            </div>

            <div className="text">
                <div className="text-box">
                    <h4>Business</h4>
                    <h3>How To Use Digitalization In The classNameroom</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div className="text-box">
                    <h4>Business</h4>
                    <h3>How To Implement Chat GPT In Your Projects</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>

                <div className="text-box">
                    <h4>Business</h4>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                </div>
            </div>
            <div className="dots">
                <img src={dot} alt="dots." />
            </div>    
        </div>
    </section>
  )
}

export default NewsSection