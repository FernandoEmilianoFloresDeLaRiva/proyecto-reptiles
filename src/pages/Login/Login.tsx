import React from "react";
import { Logo } from "../../components/Logo/Logo";
import reptileImg from "../../assets/imgs/reptil_login.png";
import styles from "./Login.module.css";
import { Input } from "../../components/Input/Input";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { type LoginUserBase } from "../../entities/entity";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserSchema } from "../../entities/validators/LoginUser.validator";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useAppDispatch } from "../../redux/entities/reduxDispatch.entity";
import { loginUserAsync } from "../../redux/Auth/thunks";

function Login() {
  const [_location, setLocation] = useLocation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserBase>({ resolver: zodResolver(LoginUserSchema) });
  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/register");
  };
  const handleLogin = (data: LoginUserBase) => {
    dispatch(loginUserAsync(data));
    setLocation("/");
  };
  return (
    <main className={styles.main}>
      <div className={styles.containerLogo}>
        <Logo urlImg={reptileImg} title="TERRARIUM" />
      </div>
      <form className={styles.form}>
        <span>Iniciar Sesión</span>
        <div className={styles.containerInput}>
          <Input text="Email" config={register("email")} />
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
          <button className={styles.button} onClick={handleSubmit(handleLogin)}>
            Iniciar
          </button>
        </div>
        <button className={styles.lastButton} onClick={handleRegister}>
          Registrate
        </button>
      </form>
    </main>
  );
}

export default Login;
