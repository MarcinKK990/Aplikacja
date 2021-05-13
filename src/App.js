import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom"
import { Children, children } from 'react';


function Child() {
  
  let { id } = useParams();

  const form =  <h3>ID: hhhh{id}</h3>

  return (

    
   <div>
   { id === "Elektryk" && <h1>hhhhhhh</h1> }
   {form}
   </div>

  );
   

   
}


function App() {

  return ( 

    
  <>
  
     <header class="header">

    <div className="header__container container">
   <a href="#" class="logo">Searcher</a>
  <nav>
    <ul className="header__nav">
    
       <div className="drop">
      <li className="nav__element">
        <a href="#who" class="nav__link">Kogo szukasz</a>
        <Router>
        <div className="dropdown">
        <Link to="/Elektryk">Elektryk</Link>
        <Link to="/Hydraulik">Hydraulik</Link>
        <Link to="/Sluzarz">Ślusarz</Link>
        <Link to="/Niania">Niania</Link>
        <Link to="/Ogrodnik">Ogrodnik</Link>
        <Switch>
     <Route path="/:id"  children={<Child />} />
        </Switch>
        </div>
        </Router>
        
         </li>
        </div>
        <li className="nav__element">
        <a href="#registration" class="nav__link">Zarejestruj się</a>
       </li>
 <li className="nav__element">
 <a href="#localisation" class="nav__link">Znajdź po lokalizacji</a>
 </li>
 <li className="nav__element">
 <a href="#contact" class="nav__link">coś tam</a>
 </li>  
 

 </ul>
 
 </nav>
 </div>
 </header>
 <main>
   <div class="main-container container">
 <div className="OpeningPage" style={{ backgroundImage: `url("photo.jpg")` }}>
      <div className="Title">
        <h1> A Ty? Czyjej pomocy potrzebujesz ?</h1>
      </div>
      <div className="Searching_form">
       

     
        
      
      
        
      </div>
      </div>
      </div>
      </main>
    
       
      
</>
    
  );
}

export default App;
