import styles from "./Menu.module.css";
import { Logo } from "../../components/Logo/Logo";
import frogImg from "../../assets/imgs/frog_register.png";
import reptileImg from "../../assets/imgs/reptil_login.png";

export const Menu = () => {
  return (
    <div className={styles.container}>
      {/* darle click al boton se afecta el estado de redux, el cual manejara el home, dependiendo de la eleccion */}
      <button>
        <Logo urlImg={frogImg} title="Anfibios" />
      </button>
      <button>
        <Logo urlImg={reptileImg} title="Reptiles" />
      </button>
    </div>
  );
};
