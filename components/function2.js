import Function3 from "./function3";
import { HomeContext } from "../contexts/homecontext";
import { useContext } from "react";
export default function Function2() {
  const { homestate, setHomestate } = useContext(HomeContext);
  return (
    <>
      <div>{homestate}</div>
      <h2>Function2</h2>
      <div>Context count: {homestate}</div>
      <button onClick={() => setHomestate(homestate + 1)}>
        Context count +1
      </button>
      <Function3></Function3>
    </>
  );
}
