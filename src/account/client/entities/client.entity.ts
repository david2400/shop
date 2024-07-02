import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm'
import * as bcrypt from 'bcrypt'
import {BaseEntity} from '@common/class/entities/base.abstract.entities'
// import {Profile} from '@modules/security/profile/entities/profile.entity'
import {FavoriteProduct} from '@modules/userPreferences/favorite-product/entities/favorite-product.entity'
import {Customization} from '@modules/userPreferences/customization/entities/customization.entity'

@Entity('Client')
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'id'})
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  lastname: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  card_id: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  gender: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  address: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  username: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string

  @Column({
    type: 'text',
    nullable: true,
  })
  refresh_token: string

  // @ManyToOne(() => Profile, (profile) => profile.User, {
  //   cascade: true,
  //   lazy: true,
  // })
  // @JoinColumn([{name: 'ProfileId', referencedColumnName: 'id'}])
  // Profile: Profile

  @OneToMany(() => FavoriteProduct, (clients) => clients.client, {
    lazy: true,
  })
  favorite_product: FavoriteProduct[]

  @OneToMany(() => Customization, (customization) => customization.client, {
    lazy: true,
  })
  customization: Customization[]

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hashSync(this.password, 10)
  }
}
