import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';
//Animation
import {motion} from 'framer-motion';
import {sliderContainer,pageAnimation,fade,photoAni,lineAni,slider} from '../animation';

import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';


const OurWork = () =>{
    const [element , controls] = useScroll();
    const [element2 , controls2] = useScroll();
    return(
        <Work exit="exit" style={{background:"#fff"}} variants={pageAnimation} initial="hidden" animate="show">
            <motion.div variants={sliderContainer}>
             <Frame1 variants={slider}></Frame1>
             <Frame2 variants={slider}></Frame2>
             <Frame3 variants={slider}></Frame3>
             <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
              <motion.h2 variants={fade}>The athleat</motion.h2>
              <motion.div variants={lineAni} className="line"></motion.div>
             <Link to="/work/the-athlete">
                 <Hide>
                  <motion.img variants={photoAni} src={athlete} alt="athleat" />
                </Hide>
             </Link>
            </Movie> 
            <Movie ref={element2} animate={controls2} variants={fade} initial="hidden">
              <h2>The goodtimes</h2>
              <motion.div variants={lineAni} className="line"></motion.div>
             <Link to="/work/good-times">
              <img src={goodtimes} alt="goodtimes" />
             </Link>
            </Movie> 
            <Movie variants={fade} ref={element} initial="hidden" animate={controls}>
              <h2>The racer</h2>
              <motion.div variants={lineAni} className="line"></motion.div>
             <Link to="/work/the-racer">
              <img src={theracer} alt="athleat" />
             </Link>
            </Movie> 
            <ScrollTop />
        </Work>
    )
}

const Work = styled(motion.div)`
min-height:100vh;
overflow:hidden;
padding:2rem 5rem;
@media screen and (max-width:800px){
    padding:2rem 1rem;
}
`;
const Movie = styled(motion.div)`
padding-bottom:5rem;
h2{
    padding:1rem 0rem;
}
.line{
    height:.2rem;
    width:100%;
    margin-bottom:3rem;
    background-color:#23d997;
}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}
`;
const Hide = styled.div`
overflow:hidden;
`;

const Frame1 = styled(motion.div)`
position:fixed;
top:10%;
left:0;
width:100%;
height:100vh;
background:#fffebf;
`;

const Frame2 = styled(Frame1)`
background:#ff8efb;
`;

const Frame3 = styled(Frame1)`
background:#8edeff;
`;

const Frame4 = styled(Frame1)`
background:#8effa0;
`;
export default OurWork;