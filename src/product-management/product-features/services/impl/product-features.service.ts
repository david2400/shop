import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {ProductService} from '@modules/inventory/product/services/impl/product.service'
import {UnitProductService} from '@modules/product-management/unit-product/services/impl/unit-product.service'
import {FeaturesService} from '@modules/product-management/features/services/impl/features.service'
import {CreateProductFeatureDto} from '@modules/product-management/product-features/dto/create-product-feature.dto'
import {UpdateProductFeatureDto} from '@modules/product-management/product-features/dto/update-product-feature.dto'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'
import {ProductFeaturesRepository} from '@modules/product-management/product-features/repository/product-features.repository'

interface IProductsFeature {
  [key: string]: ProductFeature
}

@Injectable()
export class ProductFeaturesService {
  constructor(
    private productFeaturesRepository: ProductFeaturesRepository,
    private productService: ProductService,
    private unitProductService: UnitProductService,
    private featureService: FeaturesService
  ) {}

  async create(productFeature: CreateProductFeatureDto): Promise<any> {
    const newProductFeature = this.productFeaturesRepository.create(productFeature)

    const product = await this.productService.findOne(productFeature.product_id)
    if (!product) {
      throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductFeature.product = product

    const feature = await this.featureService.findOne(productFeature.feature_id)
    if (!feature) {
      throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductFeature.feature = feature

    const unitProduct = await this.unitProductService.findOne(productFeature.feature_id)
    if (!feature) {
      throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductFeature.unit_product = unitProduct

    this.productFeaturesRepository.merge(newProductFeature, productFeature)

    const results = await this.productFeaturesRepository.save(newProductFeature)

    return results
  }

  async compare(idProduct: number, idProductToCompare: number): Promise<any> {
    const product: any = await this.findByProduct(idProduct)
    if (!product) {
      throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
    }

    const productToCompare = await this.findByProduct(idProductToCompare)
    if (!productToCompare) {
      throw new HttpException(
        {message: 'The product to compare are not exist!'},
        HttpStatus.NOT_FOUND
      )
    }

    const featureProductsCompare = product.reduce((acc, products) => {
      const result = Promise.resolve(products.Feature).then((feature) => {
        acc[feature.id] = products
      })

      return acc
    }, {})

    return featureProductsCompare
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.productFeaturesRepository.softDelete({id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The productFeature does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.productFeaturesRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The productFeature does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, productFeature: UpdateProductFeatureDto): Promise<any> {
    const newProductFeature = await this.findOne(id)

    if (!newProductFeature) {
      throw new HttpException(
        {message: 'The productFeature does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    if (newProductFeature.product.id != productFeature.product_id) {
      const product = await this.productService.findOne(productFeature.product_id)
      if (!product) {
        throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductFeature.product = product
    }

    if (newProductFeature.feature.id != productFeature.feature_id) {
      const feature = await this.featureService.findOne(productFeature.feature_id)
      if (!feature) {
        throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductFeature.feature = feature
    }

    if (newProductFeature.unit_product.id != productFeature.unit_product_id) {
      const unitProduct = await this.unitProductService.findOne(productFeature.unit_product_id)
      if (!unitProduct) {
        throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductFeature.unit_product = unitProduct
    }
    this.productFeaturesRepository.merge(newProductFeature, productFeature)

    const result = await this.productFeaturesRepository.save(newProductFeature)

    return result
  }

  async findOne(id: number): Promise<ProductFeature> {
    const result = await this.productFeaturesRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findByProduct(idProduct: number): Promise<ProductFeature[]> {
    const result = await this.productFeaturesRepository.find({
      where: {product: {id: idProduct}},
    })
    return result
  }

  async findAll(): Promise<ProductFeature[]> {
    const result = await this.productFeaturesRepository.find({withDeleted: true})
    return result
  }
}
