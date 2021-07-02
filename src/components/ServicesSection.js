import React from 'react'
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About, Description,Image} from '../style';
import styled from 'styled-components';
import {scrollReveals} from '../animation';
import {useScroll} from './useScroll';


const ServicesSection = () =>{
    const [element , controls] = useScroll();
    return(
        <Services ref={element} variants={scrollReveals} animate={controls} initial="hidden">
            <Description>
                <h2>High <span>Quality</span> Services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                          <img alt="icon" src={clock} />
                          <h3>Efficiency</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                          <img alt="icon" src={teamwork} />
                          <h3>TeamWork</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                          <img alt="icon" src={diaphragm} />
                          <h3>Diaphragm</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                          <img alt="icon"src={money} />
                          <h3>Money</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
             <img src={home2} alt="home" />
            </Image>
        </Services>
    )
}


const Services = styled(About)`

h2{
    padding-bottom:2rem;
}
p{
    width:70%;
    padding:1rem 0rem 2rem 0rem;
}
`;

const Cards = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`;

const Card = styled.div`
flex-basis:15rem;

.icon{
    display:flex;
    align-items:center;
    h3{
        background-color:#fff;
        color:#000;
        margin-left:.8rem;
        padding:.8rem;
    }
}
`;
export default ServicesSection;