import { useContext } from "react";
import styles from "./Terrarium.module.css";
import { TerrariumContext } from "../../pages/Home/context";

interface Props {
  id : number;
  terrariumName: string;
  esp32Code: string;
}

const Terrarium: React.FC<Props> = ({ terrariumName, id, esp32Code }) => {
  const {setTerrarium} = useContext(TerrariumContext)
  const handleClick = (e : React.MouseEvent<HTMLOListElement>) =>{
    e.preventDefault();
    setTerrarium({
      id,
      name  : terrariumName, 
      esp32Code
    })
  }
  return <ol className={styles.terrarium} onClick={handleClick}>{terrariumName}</ol>;
};

export default Terrarium;
