import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  NavLink as Link,
} from "react-router-dom";

function Wrapper() {
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

export default Wrapper;
