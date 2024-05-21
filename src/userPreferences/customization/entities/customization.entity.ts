import {Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Customization {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number
}
