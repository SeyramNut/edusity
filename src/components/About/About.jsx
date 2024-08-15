import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellendus impedit. Iste dolores facilis iure nesciunt molestias distinctio voluptatem aperiam accusantium ex earum. Accusantium aliquam, ipsum ad numquam iusto laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellendus impedit. Iste dolores facilis iure nesciunt molestias distinctio voluptatem aperiam accusantium ex earum. Accusantium aliquam, ipsum ad numquam iusto laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellendus impedit. Iste dolores facilis iure nesciunt molestias distinctio voluptatem aperiam accusantium ex earum. Accusantium aliquam, ipsum ad numquam iusto laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellendus impedit. Iste dolores facilis iure nesciunt molestias distinctio voluptatem aperiam accusantium ex earum. Accusantium aliquam, ipsum ad numquam iusto laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellendus impedit. Iste dolores facilis iure nesciunt molestias distinctio voluptatem aperiam accusantium ex earum. Accusantium aliquam, ipsum ad numquam iusto laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, repellendus impedit. Iste dolores facilis iure nesciunt molestias distinctio voluptatem aperiam accusantium ex earum. Accusantium aliquam, ipsum ad numquam iusto laboriosam.</p>
        </div>
    </div>
  )
}

export default About