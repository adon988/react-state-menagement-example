import React, { useContext } from "react";
import { HomeContext } from "../contexts/homecontext";
import { useAtom } from "jotai";
import { countAtom } from "../store/atom";
export default function Function3() {
  const { homestate, setHomestate } = useContext(HomeContext);
  const [count, setCount] = useAtom(countAtom);
  return (
    <>
      <h2>Function3</h2>

      <div style={{ color: "red" }}>
        Jotai count: {count}
        <button onClick={() => setCount((c) => c + 1)}>jotai count +1</button>
      </div>
      <div>Context count: {homestate}</div>
      <HomeContext.Consumer>
        {({ homestate, setHomestate }) => (
          <button onClick={() => setHomestate(homestate - 1)}>
            Context count - 1
          </button>
        )}
      </HomeContext.Consumer>
    </>
  );
}
