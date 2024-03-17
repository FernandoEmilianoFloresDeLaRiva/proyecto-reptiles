import React from "react";
import styles from "./Register.module.css";
import frogImg from "../../assets/imgs/frog_register.png";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserSchema } from "../../entities/validators/CreateUser.validator";
import { type RegisterUserBase } from "../../entities/entity";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { registerUserService } from "../../services/services/users/registerUser.service";
import { useAppDispatch } from "../../redux/entities/reduxDispatch.entity";
import { registerUserAsync } from "../../redux/Auth/thunks";

export const Register = () => {
  const [_location, setLocation] = useLocation();
  const useDispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserBase>({ resolver: zodResolver(CreateUserSchema) });
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/");
  };
  const handleOnSubmit = (data: RegisterUserBase) => {
    useDispatch(registerUserAsync(data));
    setLocation("/menu");
  };
  return (
    <main className={styles.main}>
      <div className={styles.containerLogo}>
        <Logo urlImg={frogImg} title="TERRARIUM" />
      </div>
      <form className={styles.form}>
        <h1>Registrarse</h1>
        <div className={styles.containerInput}>
          <Input text="Nombre" type="text" config={register("name")} />
          {errors?.name?.message && (
            <ErrorMessage message={errors?.name?.message} />
          )}
          <Input text="Apellido" type="text" config={register("last_name")} />
          {errors?.last_name?.message && (
            <ErrorMessage message={errors?.last_name?.message} />
          )}
          <Input text="Usuario" type="text" config={register("username")} />
          {errors?.username?.message && (
            <ErrorMessage message={errors?.username?.message} />
          )}
          <Input text="Correo" type="email" config={register("email")} />
          {errors?.email?.message && (
            <ErrorMessage message={errors?.email?.message} />
          )}
          <Input
            text="Contraseña"
            type="password"
            config={register("password")}
          />
          {errors?.password?.message && (
            <ErrorMessage message={errors?.password?.message} />
          )}
          <button
            className={styles.button}
            onClick={handleSubmit(handleOnSubmit)}
          >
            Registrarse
          </button>
        </div>
        <button className={styles.lastButton} onClick={handleBack}>
          Volver
        </button>
      </form>
    </main>
  );
};
