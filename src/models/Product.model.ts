import { UUIDV4 } from 'sequelize'
import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

@Table
export class Donor extends Model {
  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.UUID)
  id?: string

  @Column
  name!: string

  @Column
  qnt!: string

  @Column
  unity!: string

  @Column
  expiration!: Date
}
