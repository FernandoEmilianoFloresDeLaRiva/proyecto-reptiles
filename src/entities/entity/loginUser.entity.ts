import { z } from "zod";
import { LoginUserSchema } from "../validators/LoginUser.validator";

export type LoginUserBase = z.infer<typeof LoginUserSchema>;
