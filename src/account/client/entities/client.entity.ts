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
import {FavoriteProduct} from '@modules/favorite-product/entities/favorite-product.entity'

@Entity('Client')
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn({type: 'int', unsigned: true, name: 'Id'})
  Id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Name: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  LastName: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  CardId: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Email: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Gender: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  Address: string

  @Column({
    type: 'varchar',
    nullable: true,
  })
  Phone: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Username: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  Password: string

  @Column({
    type: 'text',
    nullable: true,
  })
  RefreshToken: string

  // @ManyToOne(() => Profile, (profile) => profile.User, {
  //   cascade: true,
  //   lazy: true,
  // })
  // @JoinColumn([{name: 'ProfileId', referencedColumnName: 'Id'}])
  // Profile: Profile

  @OneToMany(() => FavoriteProduct, (client) => client.Client, {
    lazy: true,
  })
  FavoriteProduct: FavoriteProduct[]

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.Password = await bcrypt.hashSync(this.Password, 10)
  }
}
