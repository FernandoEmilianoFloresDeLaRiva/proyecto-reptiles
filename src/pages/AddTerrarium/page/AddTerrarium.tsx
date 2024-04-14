import React from "react";
import { Input } from "../../../components/Input/Input";
import styles from "./AddTerrarium.module.css";
import { useLocation } from "wouter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddTerrariumBase } from "../../../entities/entity";
import { AddTerrariumSchema } from "../validator/AddTerrarium.validator";
import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";
import { ContainerErrorInput } from "../components/ContainerErrorInput/ContainerErrorInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/entities";
import { postTerrariumService } from "../../../services/services/terrariums/postTerrarium.service";
import { AddTerrariumDto } from "../../../entities/dtos/AddTerrarium.dto";

export const AddTerrarium = () => {
  const { id, token } = useSelector((state: RootState) => state.auth);
  const [, setLocation] = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTerrariumBase>({ resolver: zodResolver(AddTerrariumSchema) });
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/home");
  };
  const handleRegister = async (data: AddTerrariumBase) => {
    const reqTerrarium = new AddTerrariumDto(data, id);
    const res = await postTerrariumService(reqTerrarium, token);
    console.log(res);
    setLocation("/home");
  };
  return (
    <main className={styles.main}>
      <span>Agregar Terrarios</span>
      <form className={styles.form}>
        <div className={styles.containerInput}>
          <ContainerErrorInput>
            <Input text="Nombre" config={register("name")} />
            {errors?.name?.message && (
              <ErrorMessage message={errors?.name?.message} />
            )}
          </ContainerErrorInput>
          <ContainerErrorInput>
            <Input
              text="Temperatura máxima"
              type="number"
              config={register("max_temp")}
            />
            {errors?.max_temp?.message && (
              <ErrorMessage message={errors?.max_temp?.message} />
            )}
          </ContainerErrorInput>
          <ContainerErrorInput>
            <Input
              text="Temperatura mínima"
              type="number"
              config={register("min_temp")}
            />
            {errors?.min_temp?.message && (
              <ErrorMessage message={errors?.min_temp?.message} />
            )}
          </ContainerErrorInput>
          <ContainerErrorInput>
            <Input
              text="Humedad máxima"
              type="number"
              config={register("max_humidity")}
            />
            {errors?.max_humidity?.message && (
              <ErrorMessage message={errors?.max_humidity?.message} />
            )}
          </ContainerErrorInput>
          <ContainerErrorInput>
            <Input
              text="Humidad mínima"
              type="number"
              config={register("min_humidity")}
            />
            {errors?.min_humidity?.message && (
              <ErrorMessage message={errors?.min_humidity?.message} />
            )}
          </ContainerErrorInput>
          <ContainerErrorInput>
            <Input
              text="Rayos UV máximos"
              type="number"
              config={register("max_uv")}
            />
            {errors?.max_uv?.message && (
              <ErrorMessage message={errors?.max_uv?.message} />
            )}
          </ContainerErrorInput>
          <ContainerErrorInput>
            <Input
              text="Rayos UV mínimos"
              type="number"
              config={register("min_uv")}
            />
            {errors?.min_uv?.message && (
              <ErrorMessage message={errors?.min_uv?.message} />
            )}
          </ContainerErrorInput>
          <button
            className={styles.button}
            onClick={handleSubmit(handleRegister)}
          >
            Agregar
          </button>
        </div>
        <button className={styles.lastButton} onClick={handleBack}>
          Volver
        </button>
      </form>
    </main>
  );
};
