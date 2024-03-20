import React from "react";
import { Input } from "../../components/Input/Input";
import  styles  from "../AddTerrarium/AddTerrarium.module.css";
import { useLocation } from "wouter";

export const AddTerrarium = () => {
  const [, setLocation] = useLocation();
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/home");
  };
  return (
    <main className={styles.main}>
      <span>Agregar Terrarios</span>
      <form className={styles.form}>
      
        <div className={styles.containerInput}>
          <Input text="Código de registro" />
          <Input text="Nombre" />
          <Input text="Temperatura máxima" type="number"/>
          <Input text="Temperatura mínima" type="number"/>
          <Input text="Humedad máxima" type="number" />
          <Input text="Humidad mínima" type="number" />
          <Input text="Rayos UV máximos" type="number"/>
          <Input text="Rayos UV mínimos" type="number"/>
          <button className={styles.button}>Agregar</button>
        </div>
        <button className={styles.lastButton} onClick={handleBack}>
          Volver
        </button>
      </form>
    </main>
  );
};
