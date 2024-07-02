import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Feature} from '@modules/product-management/features/entities/feature.entity'
import {CreateFeatureDto} from '@modules/product-management/features/dto/create-feature.dto'
import {UpdateFeatureDto} from '@modules/product-management/features/dto/update-feature.dto'
import {FeaturesRepository} from '@modules/product-management/features/repository/features.repository'
import {UnitProductService} from '@modules/product-management/unit-product/services/unit-product.service'

@Injectable()
export class FeaturesService {
  constructor(
    private featureRepository: FeaturesRepository,
    private unitProductService: UnitProductService
  ) {}

  async create(feature: CreateFeatureDto): Promise<any> {
    const result = await this.findOneByName(feature)
    if (result.length != 0) {
      throw new HttpException({message: 'feature already registered exist!'}, HttpStatus.FOUND)
    }
    const newFeature = this.featureRepository.create(feature)

    const roles = await this.unitProductService.findByIds(feature.feature_unit)
    if (roles.length == 0 || roles.length < feature.feature_unit.length) {
      throw new HttpException({message: 'The roles are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newFeature.feature_unit = roles

    this.featureRepository.merge(newFeature, feature)

    const results = await this.featureRepository.save(newFeature)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.featureRepository.softDelete({id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The feature does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.featureRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The feature does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, feature: UpdateFeatureDto): Promise<any> {
    const newFeature = await this.findOne(id)

    if (!newFeature) {
      throw new HttpException(
        {message: 'The feature does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    if (feature.feature_unit) {
      const unitProducts = await this.unitProductService.findByIds(feature.feature_unit)
      if (unitProducts.length == 0 || unitProducts.length < feature.feature_unit.length) {
        throw new HttpException({message: 'The roles are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newFeature.feature_unit = unitProducts
    }

    this.featureRepository.merge(newFeature, feature)

    const result = await this.featureRepository.save(newFeature)

    return result
  }

  async findOneByName(feature: any): Promise<Feature[]> {
    const result = await this.featureRepository.find({
      where: {name: feature.name},
    })
    return result
  }

  async findOne(id: number): Promise<Feature> {
    const result = await this.featureRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Feature[]> {
    const result = await this.featureRepository.find({withDeleted: true})
    return result
  }
}
