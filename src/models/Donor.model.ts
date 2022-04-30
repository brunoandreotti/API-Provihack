import { UUID } from 'sequelize'
import { Table, Column, Model, DataType, PrimaryKey, Default} from 'sequelize-typescript'


@Table
export class Donor extends Model {
  
  @PrimaryKey
  @Default(UUID)
  @Column(DataType.UUID)
  id?: string

  @Column
  name!: string

  @Column
  cnpj!: string

  @Column
  cep!: string

  @Column
  email!: string

  @Column
  password!: string

}