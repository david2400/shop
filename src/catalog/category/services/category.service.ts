import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
// import {ICategory} from '@modules/catalog/category/services/interface/category.interface'
import {Category} from '@modules/catalog/category/entities/category.entity'
import {CreateCategoryDto} from '@modules/catalog/category/dto/create-category.dto'
import {UpdateCategoryDto} from '@modules/catalog/category/dto/update-category.dto'
import {CategoryRepository} from '@modules/catalog/category/repository/category.repository'

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async create(category: CreateCategoryDto) {
    const result = await this.findOneByName(category)
    console.log(result)
    if (result.length != 0) {
      throw new HttpException({message: 'The category already registered!'}, HttpStatus.FOUND)
    }
    const newCategory = this.categoryRepository.create(category)

    this.categoryRepository.merge(newCategory, category)

    const results = await this.categoryRepository.save(newCategory)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.categoryRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The category does not exist or could not be delete!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.categoryRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The category does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, category: UpdateCategoryDto): Promise<UpdateResult> {
    const newCategory = this.categoryRepository.create(category)

    this.categoryRepository.merge(newCategory, category)

    const result = await this.categoryRepository.update({id: id}, newCategory)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The category does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async findOneByName(category: CreateCategoryDto): Promise<Category[]> {
    const result = await this.categoryRepository.find({
      where: {name: category.name},
    })
    return result
  }

  async findOne(id: number): Promise<Category> {
    const result = await this.categoryRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Category[]> {
    const result = await this.categoryRepository.find({withDeleted: true})
    return result
  }
}
