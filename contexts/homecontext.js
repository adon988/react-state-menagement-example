import { createContext } from 'react';

export const HomeContext = createContext({
  homestate: '',
  setHomestate: () => {}
});
