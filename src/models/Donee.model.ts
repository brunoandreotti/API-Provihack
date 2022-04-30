import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
} from "sequelize-typescript";

@Table
export class Donee extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  id?: string;

  @Column
  name!: string;

  @Column
  responsible!: string;

  @Column
  cnpj!: string;

  @Column
  cep!: string;

  @Column
  email!: string;

  @Column
  password!: string;
}
