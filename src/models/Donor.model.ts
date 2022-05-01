import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Default,
  HasMany,
} from "sequelize-typescript";
import { Product } from "./Product.model";

@Table
export class Donor extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  id?: string;

  @Column
  name!: string;

  @Column
  cnpj!: string;

  @Column
  cep!: string;

  @Column
  email!: string;

  @Column
  password!: string;

  @HasMany(() => Product)
  products!: Product[]
}
