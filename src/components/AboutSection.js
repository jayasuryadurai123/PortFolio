import React from 'react'
import home1 from '../img/home1.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim,fade,photoAni } from '../animation';
import {About,Description,Hide,Image} from '../style';
import Wave from './Wave';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>we work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Your <span>Dream</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography and videography idea.
                We have professionals with amazing skills
             </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAni} src={home1} alt="a guy with a camera" />
            </Image>
            <Wave />
        </About>
    )
}



export default AboutSection;