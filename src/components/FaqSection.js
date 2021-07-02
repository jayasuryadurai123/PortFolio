import React from 'react';
import styled from 'styled-components';
import {About} from '../style';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveals} from '../animation';


const FaqSection = ()=>{
    const [element , controls] = useScroll();
    return(
        <Faq variants={scrollReveals} initial="hidden" animate={controls} ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="Dou You Have any Questions">
                 <div className="answer">
                     <p>lorem ipsum dolor sit amet</p>
                     <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                     </p>
             </div>
            </Toggle>
            <Toggle title="Daily Schedule">
                 <div className="answer">
                     <p>lorem ipsum dolor sit amet</p>
                     <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                     </p>
                 </div>
            </Toggle>
            <Toggle title="Different Payment Methods">
                 <div className="answer">
                     <p>lorem ipsum dolor sit amet</p>
                     <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                     </p>
                 </div>
            </Toggle>
            <Toggle title="What Prodect do you Offer">
                 <div className="answer">
                     <p>lorem ipsum dolor sit amet</p>
                     <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                     </p>
                 </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}


const Faq = styled(About)`
display:block;

span{
    display:block;
}
h2{
    padding-bottom:2rem;
    font-weight:lighter;
}

.faq-line{
    background-color:#ccc;
    height:.2rem;
    width:100%;
    margin:2rem 0rem;
}

.answer{
    padding:1rem 0rem;
        
    p{
         padding:1rem 0rem;
    }
}
`;
export default FaqSection;