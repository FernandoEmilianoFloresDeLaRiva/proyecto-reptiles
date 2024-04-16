import { ReactNode, useState } from "react";
import { TerrariumContext } from "./terrarium.context";

interface Props {
  children: ReactNode;
}

export const TerrariumProvider: React.FC<Props> = ({ children }) => {
  const [terrarium, setTerrarium] = useState<{
    id: number;
    name: string;
  }>({
    id: 0,
    name: "",
  });
  return (
    <TerrariumContext.Provider value={{ terrarium, setTerrarium }}>
      {children}
    </TerrariumContext.Provider>
  );
};
