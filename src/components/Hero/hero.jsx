import React from 'react'
import './hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from 'framer-motion';
const Hero = () => {

    const transition = { type: 'string', duration: 3 }
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best add */}
                <div className="the-best">
                    <motion.div
                        initial={{ left: '269px' }}
                        whileInView={{ left: '35px' }}
                        transition={{ ...transition, type: 'tween' }}

                    ></motion.div>
                    <span>The Best Fitness Club in the Town</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div><span>
                        Ideal Body</span>
                    </div>
                    <div>
                        <span>In here we will help tou to shape and build your ideal body and live up your life to fullset</span>
                    </div>
                </div>
                {/* figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>member joined</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>fitness program</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "9rem" }}
                    transition={transition}
                    className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span> 116 bpm</span>
                </motion.div>

                {/* hero image */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: "28rem" }}
                    whileInView={{ right: "40rem" }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />
                {/* calories */}
                <motion.div
                    initial={{ right: "45rem" }}
                    whileInView={{ right: "32rem" }}
                    transition={transition}
                    className="calory">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burn</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero