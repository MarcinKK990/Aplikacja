import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Main from "./components/main";

function App() {
  return (
    <>
      <Router>
        <header>
          <div className="header__container container">
            <h1 className="logo">Searcher</h1>
            <ul className="header__nav">
              <div className="drop">
                <li className="nav__element">
                  <a href="#who" class="nav__link">
                    Kogo szukasz
                  </a>
                  <div className="dropdown">
                    <Link to="/Elektryk">Elektryk</Link>
                    <Link to="/Hydraulik">Hydraulik</Link>
                    <Link to="/Slusarz">Slusarz</Link>
                    <Link to="/Niania">Niania</Link>
                    <Link to="/Ogrodnik">Ogrodnik</Link>
                  </div>
                </li>
              </div>
              <li>hh</li>
              <li>hh</li>
            </ul>
          </div>
        </header>
        <main className="main container">
          <div className="function">
            <Switch>
              <Route exact path="/" children={<Main />} />
              <Route exact path="/:id" children={<Wrapper />} />
            </Switch>
          </div>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}
export default App;
