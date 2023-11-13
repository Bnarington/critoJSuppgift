import React from 'react'
import '../../styles/index_styles/08_ProjectCase.css'
import image1 from '../../assets/images/Image-8.jpg'
import image2 from '../../assets/images/Image-10.jpg'
import image3 from '../../assets/images/Image-9.jpg'
import image4 from '../../assets/images/Image-11.jpg'


const ProjectCase = () => {
  return (
    <section className="project-case-section">
        <div className="container">
            <div className="section-title">
                <p>Projects and Case studies</p>
                <h2>Let's Look At Our Global Projects</h2>
            </div>

            <div className="project-cases-grid">
                <article>
                    <img src={image1} alt="Newspaper" />
                    <h3>Grow your buisness</h3>
                    <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i> </a>
                </article>
                <article>
                    <img src={image2} alt="Pink iPad and Apple watch" />
                    <h3>Why your client needs a responsive website</h3>
                    <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i> </a>
                </article>
                <article>
                    <img src={image3} alt="Office supplies" />
                    <h3>Educate your employees to get better results</h3>
                    <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i> </a>
                </article>
                <article>
                    <img src={image4} alt="Laptop with buisness infographics." />
                    <h3>Buisness insights is a important piece of your business</h3>
                    <a href="#">Read More <i className="fa-regular fa-arrow-up-right"></i> </a>
                </article>

            </div>
            <div className="d-flex justify-content-center align-items-center pt-5">
                <button className="btn-blk">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
        </div>
    </section>
  )
}

export default ProjectCase