import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
 min-height:90vh;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:2.5rem 5rem;
 color:#fff;
 @media screen and (max-width:892px){
  display: block;
  padding:2rem 4rem;
  text-align: center;
}
`;

export const Description = styled.div`
flex:1;
padding-right:2.5rem;
z-index:2;
@media screen and (max-width:892px){
   padding: 0rem;

   button{
       margin:2rem 0rem;
   }
}

h2{
    font-weight:lighter;
}
`;
export const Image = styled.div`
 flex:1;
 z-index:2;
 overflow:hidden;
 img{
     width:100%;
     height:80vh;
     object-fit:cover;
 }
`;

export const Hide = styled.div`
overflow:hidden;
`;