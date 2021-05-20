import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  NavLink as Link,
} from "react-router-dom";
import Elektryk from "./Elektryk";
import Hydraulik from "./Hydraulik";
import Slusarz from "./Slusarz";
import Niania from "./Niania";
import Ogrodnik from "./Ogrodnik";



function Child() {
  let { id } = useParams();

  return (
    <div className="container">
      {id === "Elektryk" && <Elektryk />}
      {id === "Hydraulik" && <Hydraulik />}
      {id === "Slusarz" && <Slusarz />}
      {id === "Niania" && <Niania />}
      {id === "Ogrodnik" && <Ogrodnik />}
    </div>
  );
}

function Main() {
  return (
    <main>
      <div class="main-container container">
        <div
          className="OpeningPage"
        >
          <div className="Title">
            <h1> A Ty? Czyjej pomocy potrzebujesz ?</h1>
          </div>
          <div className="Searching_form"></div>
        </div>
      </div>
    </main>
  );
}






function App() {

  let { id } = useParams();

  const API = "http://localhost:3001";
 
  fetch(`${API}/${id}`)
  .then(resp => resp.json())
  .then(data => {
    setOcupations(data)
  })

  
  
  return (
    <>
      <header class="header">
        <div className="header__container container">
          <nav>
            <ul className="header__nav">
              <div className="drop">
                <li className="nav__element">
                  <a href="#who" class="nav__link">
                    Kogo szukasz
                  </a>
                  <Router>
                    <div className="dropdown">
                      <Link to="/Elektryk">Elektryk</Link>
                      <Link to="/Hydraulik">Hydraulik</Link>
                      <Link to="/Sluzarz">Slusarz</Link>
                      <Link to="/Niania">Niania</Link>
                      <Link to="/Ogrodnik">Ogrodnik</Link>
                    </div>
                    <div className="function">
                    <Switch>
                      <Route exact path="/" children={<Main />} />
                      <Route exact path="/:id" children={<Child />} />
                    </Switch>
                    </div>
                  </Router>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default App;