import { useParams } from "react-router-dom";

function Child() {
  let { id } = useParams();

  const form = <h3>ID: hhhh{id}</h3>;

  return (
    <div>
      {id === "Elektryk" && <h1>hhhhhhh</h1>}
      {form}
    </div>
  );
}

export default Child;
