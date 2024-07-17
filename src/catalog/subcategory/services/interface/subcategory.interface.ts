import {DeepPartial, FindManyOptions, FindOneOptions, UpdateResult} from 'typeorm'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'
import {UpdateSubcategoryDto} from '@modules/catalog/subcategory/dto/update-subcategory.dto'
import {CreateSubcategoryDto} from '@modules/catalog/subcategory/dto/create-subcategory.dto'

export interface ISubcategory {
  createSubcategory(brand: CreateSubcategoryDto)
  delete(id: number): Promise<UpdateResult>
  restore(id: number): Promise<UpdateSubcategoryDto>
  update(id: number, brand: UpdateSubcategoryDto): Promise<UpdateResult>
  findOneByName(brand: any): Promise<Subcategory[]>
  findOne(id: number): Promise<Subcategory>
  findAll(): Promise<Subcategory[]>
}
