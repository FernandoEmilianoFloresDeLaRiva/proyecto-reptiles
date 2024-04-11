import { AddTerrariumBase } from "../entity";
import { TerrariumProfileDto } from "./TerrariumProfile.dto";

export class AddTerrariumDto {
  name: string;
  terrariumProfile: TerrariumProfileDto;
  user: { id: number };
  constructor(terrariumReq: AddTerrariumBase, id: number) {
    this.name = terrariumReq.name;
    this.terrariumProfile = new TerrariumProfileDto(terrariumReq);
    this.user = { id };
  }
}
