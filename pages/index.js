import Function1 from "../components/function1";
import Function2 from "../components/function2";
import { useContext } from "react";
import { HomeContext } from "../contexts/homecontext";
import { useAtom } from "jotai";
import { countAtom } from "../store/atom";

export default function Home() {
  const { homestate, setHomestate } = useContext(HomeContext);
  const [count, setCount] = useAtom(countAtom);
  return (
    <>
      <h1>Home</h1>
      <div style={{ color: "red" }}>
        Jotai count: {count}
        <button onClick={() => setCount(count + 1)}>Atom+1</button>
      </div>
      Context count {homestate}
      <button onClick={() => setHomestate(homestate + 1)}>Context +1</button>
      <Function1>
        <Function2 />
      </Function1>
    </>
  );
}
