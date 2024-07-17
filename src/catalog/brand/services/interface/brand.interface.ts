import {DeepPartial, FindManyOptions, FindOneOptions, UpdateResult} from 'typeorm'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {CreateBrandDto} from '@modules/catalog/brand/dto/create-brand.dto'
import {UpdateBrandDto} from '@modules/catalog/brand/dto/update-brand.dto'

export interface IBrand {
  createBrand(brand: CreateBrandDto)
  delete(id: number): Promise<UpdateResult>
  restore(id: number): Promise<UpdateBrandDto>
  update(id: number, brand: UpdateBrandDto): Promise<UpdateResult>
  findOneByName(brand: any): Promise<Brand[]>
  findOne(id: number): Promise<Brand>
  findAll(): Promise<Brand[]>
}
