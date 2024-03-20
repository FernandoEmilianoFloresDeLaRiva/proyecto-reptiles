import { z } from "zod";
import { CreateUserSchema } from "../validators/CreateUser.validator";

export type RegisterUserBase = z.infer<typeof CreateUserSchema>;
