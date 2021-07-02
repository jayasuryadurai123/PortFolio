import React from 'react';
//Animation
import {motion} from 'framer-motion';
import {pageAnimation,titleAnim} from '../animation';
import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

const ContactUs = () =>{
    
    return(
        <ContactStyle initial="hidden" variants={pageAnimation} animate="show" exit="exit">
           <h2>ContactUs</h2> 
           <div className="contact">
               <Hide>
               <Contain variants={titleAnim}>
                   <div className="circle"></div>
                   <h1>Socila Media</h1>
                </Contain>
                </Hide>
                <Hide>
                <Contain variants={titleAnim}>
                    <div className="circle"></div>
                    <h1>Contact Us</h1>
                </Contain>
                </Hide>
                <Hide>
                <Contain variants={titleAnim}>
                    <div className="circle"></div>
                    <h1>About Us</h1>
                </Contain>
                </Hide>
           </div>
           <ScrollTop />
        </ContactStyle>
    )
}


const ContactStyle = styled(motion.div)`
 min-height: 90vh;
 background-color: #fff;
 padding:2.5rem 5rem;
`;
const Contain = styled(motion.div)`
 margin: 2rem 0rem;
 display: flex;
 align-items: center;
 
 .circle{
     height: 1.5rem;
     width: 1.5rem;
     margin: 0rem 1rem 0rem 0rem;
     background-color: #353535;
     border-radius: 50%;
 }
`;
const Hide = styled(motion.div)` overflow:hidden;`;

export default ContactUs;