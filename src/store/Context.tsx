import React, { createContext, useContext, useState } from "react";

type ContextType = {
  items: any[];
  setItems: Function;
};

type ComponentWithChildProps = React.PropsWithChildren<{ example?: string }>;

export const Context = createContext<ContextType>({
  items: [],
  setItems: Function,
});

export const useItems = () => useContext(Context);

export function ContextProvider({ children }: ComponentWithChildProps) {
  const [items, setItems] = useState([]);

  return (
    <Context.Provider value={{ items, setItems }}>{children}</Context.Provider>
  );
}
