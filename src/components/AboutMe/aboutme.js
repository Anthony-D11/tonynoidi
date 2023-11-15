import React from 'react'
import './aboutme.css'
import linkedinConnect from '../../assets/linkedin.png'
import aboutMePicture from '../../assets/about_me.png'
import youtubeConnect from '../../assets/youtube.png'

const AboutMe = () => {
  return (
   <section className="section-section">
    <div id="aboutme" className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="d-flex col-md-6 order-md-last">
                    <div className="bio ms-auto">
                        <div className="title">
                            <div className="subtitle">About Me</div>
                            <h2>Hello!</h2>
                        </div>
                        <div className="introduction">
                        Hiện tại mình đang theo học thạc sĩ ngành Computer Science in Cloud Computing Specialization (Điện Toán Đám Mây) tại Northeastern University, USA. Mình đã có cơ hội được thực tập và làm việc ở các công ty công nghệ lớn hàng đầu ở Mỹ và Việt Nam. Mình chia sẻ kiến thức và kinh nghiệm về lập trình, du học.  Có thể là cả Crypto HODLLLL nữa :D  
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={aboutMePicture} alt="about-me" />
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}

export default AboutMe