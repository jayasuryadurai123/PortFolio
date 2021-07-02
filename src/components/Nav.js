import React from 'react';
import styled from 'styled-components';
import {Link,useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav = () =>{
    const {pathname} = useLocation();
    return(
       <StyledNav>
           <h1><Link id="logo" to="/">Capture</Link></h1>
           <ul>
               <li>
                    <Link to='/'>1.About Us</Link>
                     <Line 
                       transition={{duration:.5}} 
                       initial={{width:'0%'}} 
                       animate={{width:pathname === '/' ? '70%' : "0%"}} />
                    </li>
               <li>
                    <Link to="/work">2.Our Work</Link>
                    <Line transition={{duration:0.7}} initial={{width:'0%'}}
                    animate={{width:pathname === '/work' ? '70%' : '0%'}} />
                </li>
               <li>
                   <Link to="/contact">3.Contact Us</Link>
                   <Line initial={{width:'0%'}} transition={{duration:.7}} 
                   animate={{width:pathname === '/contact' ? '70%' : '0%'}} />
                </li>
           </ul>
       </StyledNav>
    )
}

const StyledNav = styled.nav`
min-height:10vh;
margin:auto;
justify-content:space-between;
display:flex;
position: sticky;
top:0;
left:0;
z-index:10;
align-items:center;
background-color:#282828;
padding:1rem 5rem;
a{
    text-decoration:none;
    color:#fff;
}
ul{
    list-style:none;
    display:flex;
}
#logo{
    font-family:"lobster",cursive;
    font-weight:400;
    font-size:1.4rem;
}
li{
    padding-left:4rem;
    position:relative;
}
@media screen and (max-width:892px){
  flex-direction: column;
  padding:1rem 0rem;
  ul{
      padding:1rem;
      justify-content: space-evenly;
      width:100%;
  }
}
`
const Line = styled(motion.div)`
 position: absolute;
 height:.1rem;
 width:70%;
 background-color: #23D997;
 bottom: -30%;
 left:35%;
`;

export default Nav;