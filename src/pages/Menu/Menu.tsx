import styles from "./Menu.module.css";
import { Logo } from "../../components/Logo/Logo";
import frogImg from "../../assets/imgs/frog_register.png";
import reptileImg from "../../assets/imgs/reptil_login.png";
import { ThemeOptions } from "../../redux/entities";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/Theme/theme.slice";
import { useLocation } from "wouter";

export const Menu = () => {
  const [_location, setLocation] = useLocation();
  const dispatchRedux = useDispatch();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    theme: ThemeOptions
  ) => {
    e.preventDefault();
    dispatchRedux(setTheme(theme));
    setLocation("/home");
  };
  return (
    <div className={styles.container}>
      {/* darle click al boton se afecta el estado de redux, el cual manejara el home, dependiendo de la eleccion */}
      <button onClick={(e) => handleClick(e, ThemeOptions.ANFIBIOS)}>
        <Logo urlImg={frogImg} title="Anfibios" />
      </button>
      <button onClick={(e) => handleClick(e, ThemeOptions.REPTILES)}>
        <Logo urlImg={reptileImg} title="Reptiles" />
      </button>
    </div>
  );
};
