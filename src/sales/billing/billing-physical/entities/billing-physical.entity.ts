import {PrimaryGeneratedColumn} from 'typeorm'

export class BillingPhysical {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number
}
