import { z } from "zod";

export const LoginUserSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email invalido",
    })
    .max(45, {
      message: "La longitud maxima es de 45 caracteres",
    }),
  password: z
    .string()
    .min(1, {
      message: "La contraseña es un campo requerido",
    })
    .max(60, {
      message: "La longitud maxima es de 60 caracteres",
    }),
});
