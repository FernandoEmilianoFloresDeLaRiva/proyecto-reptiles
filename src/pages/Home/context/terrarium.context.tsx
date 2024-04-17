import { Dispatch, SetStateAction, createContext } from "react";

interface TerrariumContextType {
  terrarium: {
    id: number;
    name: string;
    esp32Code : string;
  };
  setTerrarium: Dispatch<
    SetStateAction<{
      id: number;
      name: string;
      esp32Code: string;
    }>
  >;
}

export const TerrariumContext = createContext<TerrariumContextType>({
  terrarium: {
    id: 0,
    name: "",
    esp32Code :  ""
  },
  setTerrarium: () => {},
});
