import { useState, useMemo } from "react";
import { HomeContext } from "../contexts/homecontext";

export default function AppLayout({ children }) {
  const [homestate, setHomestate] = useState(0);
  const value = useMemo(() => ({ homestate, setHomestate }), [homestate]);
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
