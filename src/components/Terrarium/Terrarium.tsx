import styles from "./Terrarium.module.css";

interface Props {
  terrariumName: string;
}

const Terrarium: React.FC<Props> = ({ terrariumName }) => {
  return <ol className={styles.terrarium}>{terrariumName}</ol>;
};

export default Terrarium;
