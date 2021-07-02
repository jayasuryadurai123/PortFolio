import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
   @media screen and (max-width:900px){
       font-size: 75%;
   }
   @media screen and (max-width:892px){
 
   }
}
body{
    background:#1b1b1b;
    font-family:'Inter',sans-serif;
    overflow-x: hidden;
}

button{
    cursor:pointer;
    padding:1rem 2rem;
    font-weight:bold;
    font-family:'Inter',sans-serif;
    font-size:1.1rem;
    border:2px solid #23d997;
    background:transparent;
    color:#fff;
    transition:0.4s ease all;

    &:hover{
        background-color:#23d997;
        color:#fff;
    }
}
h2{
    font-weight:lighter;
    font-size:2.9rem;
    }
    h3{
        color:#fff;
    }
    h4{
        font-weight:bold;
    }
    span{
        color:#23d997;
        font-weight:bold;
    }
    a{
        font-size:1.1rem;
    }
    p{
        padding:3rem 0rem;
        color:#fff;
        font-size:1.4rem;
    }
`;

export default GlobalStyle;