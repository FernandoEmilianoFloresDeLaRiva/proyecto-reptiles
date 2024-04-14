import { Logo } from "../../components/Logo/Logo";
import styles from "./Page404.module.css";
import reptileImg from "../../assets/imgs/reptil_login.png";
import { useLocation } from "wouter";

export const Page404 = () => {
  const [_location, setLocation] = useLocation();
  const handleLocation = () => {
    setLocation("/");
  };
  return (
    <main className={styles.main}>
      <div className={styles.containerLogo}>
        <Logo urlImg={reptileImg} title="TERRARIUM" />
      </div>
      <div className={styles.container404}>
        <span className={styles.firstText}>Oooops!</span>
        <span>La pagina que estas buscando no existe!</span>
        <a onClick={handleLocation}>
          <span>Vuelve a nuestra pagina inicial!</span>
        </a>
      </div>
    </main>
  );
};
