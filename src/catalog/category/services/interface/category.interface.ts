import {DeepPartial, FindManyOptions, FindOneOptions, UpdateResult} from 'typeorm'
import {Category} from '@modules/catalog/category/entities/category.entity'
import {UpdateCategoryDto} from '@modules/catalog/category/dto/update-category.dto'
import {CreateCategoryDto} from '@modules/catalog/category/dto/create-category.dto'

export interface ICategory {
  create(brand: CreateCategoryDto)
  delete(id: number): Promise<UpdateResult>
  restore(id: number): Promise<UpdateCategoryDto>
  update(id: number, brand: UpdateCategoryDto): Promise<UpdateResult>
  findOneByName(brand: any): Promise<Category[]>
  findOne(id: number): Promise<Category>
  findAll(): Promise<Category[]>
}
