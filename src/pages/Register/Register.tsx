import React from "react";
import styles from "./Register.module.css";
import frogImg from "../../assets/imgs/frog_register.png";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { useLocation } from "wouter";

export const Register = () => {
  const [, setLocation] = useLocation();
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/");
  };
  return (
    <main className={styles.main}>
      <div className={styles.containerLogo}>
        <Logo urlImg={frogImg} title="TERRARIUM" />
      </div>
      <form className={styles.form}>
        <span>Registrarse</span>
        <div className={styles.containerInput}>
          <Input text="Nombre" />
          <Input text="Apellido" />
          <Input text="Usuario" />
          <Input text="Correo" type="email" />
          <Input text="Contraseña" type="password" />
          <button className={styles.button}>Registrarse</button>
        </div>
        <button className={styles.lastButton} onClick={handleBack}>
          Volver
        </button>
      </form>
    </main>
  );
};
