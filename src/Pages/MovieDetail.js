import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';
//Animation
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const MovieDetail = ()=>{
    const history = useHistory();
    const url = history.location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);

    //UseEffect
    useEffect(()=>{
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    },[movies,url]);
    return(
        <>
        {movie && (
        <Details variants={pageAnimation} initial="hidden" exit="exit" animate="show">
          <HeadLine>
              <h2>{movie.title}</h2>
              <img src={movie.mainImg} alt="movie" />
            </HeadLine>
            <Awards>
                { movie.awards.map((award) =>(
                    <Award title={award.title} description={award.description} key={award.title} />
                ))}
            </Awards>
            <ImageDisplay>
                <img src={movie.secondaryImg} alt="image" />
            </ImageDisplay>
        </Details>
        )}
      </>
    )
}

const Details = styled(motion.div)`

color:#fff;
`;

const HeadLine = styled.div`
min-height:90vh;
position:relative;
padding-top:20vh;

h2{
    position:absolute;
    top:10%;
    left:50%;
    transform:translate(-50%,-10%);
}
img{
    width:100%;
    height:80vh;
    object-fit:cover;
}
`;
const Awards = styled.div`
 min-height:80vh;
 display:flex;
 padding:5rem 8rem;
 align-items:center;
 justify-content:space-around;

 @media screen and (max-width:800px){
     display: block;
     margin:1rem 1rem;
     padding:2rem 3rem;
 }
`;

const AwardStyle = styled.div`
 padding:3rem;
 h3{
     font-size:1.6rem;
 }
 .underline{
     height:.3rem;
     background-color:#23d997;
     width:100%;
     margin-top:.7rem;
     border-radius:1rem;
 }
`;
const ImageDisplay = styled.div`
min-height:50vh;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}

`;

const Award = ({title,description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="underline"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}

export default MovieDetail;