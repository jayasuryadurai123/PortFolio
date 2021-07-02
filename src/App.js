import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from '../src/Pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './Pages/ContactUs';
import OurWork from './Pages/OurWork';
import MovieDetail from './Pages/MovieDetail';
import {Switch, Route,useLocation,useHistory} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';


function App() {
  const loaction = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={loaction} key={loaction.pathname}>
       <Route path="/" exact>
         <AboutUs />
        </Route>
       <Route path="/contact">
        <ContactUs />
       </Route>
       <Route path="/work" exact>
        <OurWork />
       </Route>
       <Route path="/work/:id">
         <MovieDetail/>
       </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
