import { Dispatch, SetStateAction, createContext } from "react";

interface TerrariumContextType {
  terrarium: {
    id: number;
    name: string;
  };
  setTerrarium: Dispatch<
    SetStateAction<{
      id: number;
      name: string;
    }>
  >;
}

export const TerrariumContext = createContext<TerrariumContextType>({
  terrarium: {
    id: 0,
    name: "",
  },
  setTerrarium: () => {},
});
