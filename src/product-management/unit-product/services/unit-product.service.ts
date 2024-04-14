import {DeepPartial, UpdateResult} from 'typeorm'
import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UnitProduct} from '@modules/product-management/unit-product/entities/unit-product.entity'
import {CreateUnitProductDto} from '@modules/product-management/unit-product/dto/create-unit-product.dto'
import {UpdateUnitProductDto} from '@modules/product-management/unit-product/dto/update-unit-product.dto'
import {UnitProductRepository} from '@modules/product-management/unit-product/repository/unit-product.repository'

@Injectable()
export class UnitProductService {
  constructor(private unitRepository: UnitProductRepository) {}

  async create(unitProduct: CreateUnitProductDto): Promise<any> {
    const result = await this.findOneByName(unitProduct)
    if (result.length != 0) {
      throw new HttpException({message: 'Unit Product already registered exist!'}, HttpStatus.FOUND)
    }

    const newUnitProduct = this.unitRepository.create(unitProduct)

    if (unitProduct.GreaterUnitId) {
      const GreaterUnit = await this.findOne(unitProduct.GreaterUnitId)
      if (!GreaterUnit) {
        throw new HttpException({message: 'The brand does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newUnitProduct.GreaterUnit = GreaterUnit
    }

    if (unitProduct.SmallerUnitId) {
      const SmallerUnitId = await this.findOne(unitProduct.SmallerUnitId)
      if (!SmallerUnitId) {
        throw new HttpException({message: 'The brand does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newUnitProduct.SmallerUnit = SmallerUnitId
    }

    const results = await this.unitRepository.save(newUnitProduct)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.unitRepository.softDelete({Id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The Unit Product does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.unitRepository.recover({Id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The Unit Product does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, unitProduct: UpdateUnitProductDto): Promise<any> {
    const newUnitProduct = await this.findOne(id)

    if (!newUnitProduct) {
      throw new HttpException(
        {message: 'The Unit Product does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    if (newUnitProduct.GreaterUnit.Id != unitProduct.GreaterUnitId && unitProduct.GreaterUnitId) {
      const GreaterUnit = await this.findOne(unitProduct.GreaterUnitId)
      if (!GreaterUnit) {
        throw new HttpException({message: 'The greater unit does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newUnitProduct.GreaterUnit = GreaterUnit
    }

    if (newUnitProduct.SmallerUnit.Id != unitProduct.SmallerUnitId && unitProduct.SmallerUnitId) {
      const SmallerUnitId = await this.findOne(unitProduct.SmallerUnitId)
      if (!SmallerUnitId) {
        throw new HttpException({message: 'The smaller unit does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newUnitProduct.SmallerUnit = SmallerUnitId
    }

    this.unitRepository.merge(newUnitProduct, unitProduct)

    const result = await this.unitRepository.save(newUnitProduct)

    return result
  }

  async findOneByName(unitProduct: any): Promise<UnitProduct[]> {
    const result = await this.unitRepository.find({
      where: {Name: unitProduct.Name},
    })
    return result
  }

  async findOne(id: number): Promise<UnitProduct> {
    const result = await this.unitRepository.findOne({
      where: {Id: id},
    })
    return result
  }

  async findAll(): Promise<UnitProduct[]> {
    const result = await this.unitRepository.find({withDeleted: true})
    return result
  }

  async findByIds(product: DeepPartial<UnitProduct[]>): Promise<UnitProduct[]> {
    const result = await this.unitRepository.findByIds(product)
    return result
  }
}
