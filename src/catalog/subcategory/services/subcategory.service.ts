import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {CategoryService} from '@modules/catalog/category/services/category.service'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'
import {CreateSubcategoryDto} from '@modules/catalog/subcategory/dto/create-subcategory.dto'
import {UpdateSubcategoryDto} from '@modules/catalog/subcategory/dto/update-subcategory.dto'
import {SubcategoryRepository} from '@modules/catalog/subcategory/repository/subcategory.repository'

@Injectable()
export class SubcategoryService {
  constructor(
    private subcategoryRepository: SubcategoryRepository,
    private readonly categoryService: CategoryService
  ) {}

  async createSubcategory(subcategory: CreateSubcategoryDto): Promise<any> {
    const result = await this.findOneByName(subcategory)
    if (result.length != 0) {
      throw new HttpException({message: 'subcategory already registered exist!'}, HttpStatus.FOUND)
    }
    const newSubcategory = this.subcategoryRepository.create(subcategory)

    const category = await this.categoryService.findOne(subcategory.CategoryId)
    if (!category) {
      throw new HttpException({message: 'The category does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newSubcategory.category = category

    this.subcategoryRepository.merge(newSubcategory, subcategory)

    const results = await this.subcategoryRepository.save(newSubcategory)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.subcategoryRepository.softDelete({id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The subcategory does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.subcategoryRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The subcategory does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, subcategory: UpdateSubcategoryDto): Promise<any> {
    const newSubcategory = await this.findOne(id)

    if (!newSubcategory) {
      throw new HttpException(
        {message: 'The subcategory does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    if (newSubcategory.category.id != subcategory.CategoryId) {
      const category = await this.categoryService.findOne(subcategory.CategoryId)
      if (!category) {
        throw new HttpException({message: 'The category does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newSubcategory.category = category
    }
    this.subcategoryRepository.merge(newSubcategory, subcategory)

    const result = await this.subcategoryRepository.save(newSubcategory)

    return result
  }

  async findOneByName(subcategory: any): Promise<Subcategory[]> {
    const result = await this.subcategoryRepository.find({
      where: {name: subcategory.name},
    })
    return result
  }

  async findOne(id: number): Promise<Subcategory> {
    const result = await this.subcategoryRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Subcategory[]> {
    const result = await this.subcategoryRepository.find({withDeleted: true})
    return result
  }
}
