import React from 'react'
import '../../styles/index_styles/09_TeamBackground.css'
import image1 from '../../assets/images/Image-1.jpg'
import image2 from '../../assets/images/Image-2.jpg'
import image3 from '../../assets/images/Image-3.jpg'
import image4 from '../../assets/images/Image-4.jpg'
import dot from '../../assets/images/dot.png'
import stars from '../../assets/images/Star.png'
import ellipse1 from '../../assets/images/Ellipse 1.jpg'
import ellipse2 from '../../assets/images/Ellipse -1.jpg'
import ellipse3 from '../../assets/images/Ellipse -2.jpg'



const TeamBackground = () => {
  return (
    <section className="team-background w-100">
        <div className="container section-title">
            <p>Meet our Team</p>
            <h2>Experience Team Member</h2>
        </div>

        <div>
            <button className="btn-blk btn-blk-extra">Browse Team<i className="fa-regular fa-arrow-up-right"></i></button>
        </div>

        <div className="member-pictures">
            <div className="container container-extra">
                <img src={image1} alt="Picture of Kristine Palmer." />
                <img src={image2} alt="Picture of Mark Aubri." />
                <img src={image3} alt="Picture of Kimberly Hansen." />
                <img src={image4} alt="Picture of Justin Willoman." />
            </div>

            <div className="container container-extra-extra">
                <div className="info-txt">
                    <h4>Kristine Palmer</h4>
                    <p>Chief Operations Officer</p>
                </div>
                <div className="info-txt">
                    <h4>Mark Aubri</h4>
                    <p>Senior Consultant</p>
                </div>
                <div className="info-txt">
                    <h4>Kimberly Hansen</h4>
                    <p>Senior Consultant</p>
                </div>
                <div className="info-txt">
                    <h4>Justin Willoman</h4>
                    <p>Senior Tech Consultant</p>
                </div>
            </div>
            <img className="dots" src={dot} alt="" />
        </div>

        <div className="testimonial-box">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="testimonials container">
                <div className="test-content">
                    <img className="stars" src={stars} alt="5 stars!" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="nameandpic">
                        <div className="pictues">
                            <img src={ellipse1} alt="Cassandra Warren" />
                        </div>
                        <div className="text">
                            <h4>Cassandra Warren</h4>
                            <p>Buisness Manager, Dorfus</p>
                        </div>    
                    </div>
                </div>
                <div className="test-content">
                    <img className="stars" src={stars} alt="5 stars!" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="nameandpic">
                        <div className="pictues">
                            <img src={ellipse2} alt="Amanda Tulling" />
                        </div>
                        <div className="text">
                            <h4>Amanda Tulling</h4>
                            <p>Senior Developer, Square</p>
                        </div>    
                    </div>
                </div>
                <div className="test-content">
                    <img className="stars" src={stars} alt="5 stars!" />
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="nameandpic">
                        <div className="pictues">
                            <img src={ellipse3} alt="Jack McDogglas" />
                        </div>
                        <div className="text">
                            <h4>Jack McDogglas</h4>
                            <p>Key Account Manager, Gobona</p>
                        </div>    
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-5">
                <button className="btn-blk">All Reviews<i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
        </div>

    </section>
  )
}

export default TeamBackground