import {PrimaryGeneratedColumn} from 'typeorm'

export class BillingElectric {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number
}
