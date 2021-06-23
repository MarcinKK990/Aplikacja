import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as Link,
} from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Main from "./components/main";
import Choice from "./components/Choice";
import Choice_two from "./components/Choice_two";
import Choice_three from "./components/Choice_three";

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
                    Kogo szukasz ?
                  </a>
                  <div className="dropdown">
                    <li className="dropdown_li">
                      <Link to="/Elektrycy">Elektryk</Link>
                    </li>
                    <Link to="/Hydraulicy">Hydraulik</Link>
                    <Link to="/Slusarze">Slusarz</Link>
                    <Link to="/Nianie">Niania</Link>
                    <Link to="/Ogrodnicy">Ogrodnik</Link>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </header>
        <main className="main container">
          <div className="function">
            <Switch>
              <Route exact path="/" children={<Main />} />
              <Route exact path="/:id" children={<Wrapper />} />
              <Route exact path="/Choice" children={<Choice />} />
              <Route exact path="/Choice_two" children={<Choice_two />} />
              <Route exact path="/Choice_three" children={<Choice_three />} />
            </Switch>
          </div>
        </main>
        <footer></footer>
      </Router>
    </>
  );
}
export default App;
