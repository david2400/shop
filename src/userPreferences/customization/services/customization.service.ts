import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {ProductService} from '@modules/inventory/product/services/product.service'
import {Customization} from '@modules/userPreferences/customization/entities/customization.entity'
import {CustomizationRepository} from '@modules/userPreferences/customization/repository/customization.repository'
import {CreateCustomizationDto} from '@modules/userPreferences/customization/dto/create-customization.dto'
import {UpdateCustomizationDto} from '@modules/userPreferences/customization/dto/update-customization.dto'

@Injectable()
export class CustomizationService {
  constructor(
    private customizationRepository: CustomizationRepository,
    private productService: ProductService
  ) {}

  async create(customization: CreateCustomizationDto): Promise<any> {
    const newCustomization = this.customizationRepository.create(customization)

    const products = await this.productService.findByIds(customization.customization_product)
    if (products.length == 0 || products.length < customization.customization_product.length) {
      throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newCustomization.customization_product = products

    this.customizationRepository.merge(newCustomization, customization)

    const results = await this.customizationRepository.save(newCustomization)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.customizationRepository.softDelete({id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The customization does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.customizationRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The customization does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, customization: UpdateCustomizationDto): Promise<any> {
    const newCustomization = await this.findOne(id)

    if (!newCustomization) {
      throw new HttpException(
        {message: 'The customization does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    if (customization.customization_product) {
      const products = await this.productService.findByIds(customization.customization_product)
      if (products.length == 0 || products.length < customization.customization_product.length) {
        throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newCustomization.customization_product = products
    }

    this.customizationRepository.merge(newCustomization, customization)

    const result = await this.customizationRepository.save(newCustomization)

    return result
  }

  async findOneByClient(customization: any): Promise<Customization[]> {
    const result = await this.customizationRepository.find({
      where: {client: {id: customization.Client}},
    })
    return result
  }

  async findOne(id: number): Promise<Customization> {
    const result = await this.customizationRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Customization[]> {
    const result = await this.customizationRepository.find({withDeleted: true})
    return result
  }
}
