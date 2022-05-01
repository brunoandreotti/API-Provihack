import { UUIDV4 } from 'sequelize'
import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { Donor } from './Donor.model'

@Table
export class Product extends Model {
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

  @Column
  obs!: string

  @ForeignKey(() => Donor)
  @Column(DataType.UUID)
  donorId!: string

  @BelongsTo(() => Donor)
  donor!: Donor
}
