import React from "react";
import { Logo } from "../../components/Logo/Logo";
import reptileImg from "../../assets/imgs/reptil_login.png";
import styles from "./Login.module.css";
import { Input } from "../../components/Input/Input";
import { useLocation } from "wouter";

function Login() {
  const [_location, setLocation] = useLocation();
  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/register");
  };
  return (
    <main className={styles.main}>
      <div className={styles.containerLogo}>
        <Logo urlImg={reptileImg} title="TERRARIUM" />
      </div>
      <form className={styles.form}>
        <span>Iniciar Sesión</span>
        <div className={styles.containerInput}>
          <Input text="Usuario" />
          <Input text="Contraseña" type="password" />
          <button className={styles.button}>Iniciar</button>
        </div>
        <button className={styles.lastButton} onClick={handleRegister}>
          Registrate
        </button>
      </form>
    </main>
  );
}

export default Login;
