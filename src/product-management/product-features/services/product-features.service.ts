import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {ProductService} from '@modules/inventory/product/services/product.service'
import {UnitProductService} from '@modules/product-management/unit-product/services/unit-product.service'
import {FeaturesService} from '@modules/product-management/features/services/features.service'
import {CreateProductFeatureDto} from '@modules/product-management/product-features/dto/create-product-feature.dto'
import {UpdateProductFeatureDto} from '@modules/product-management/product-features/dto/update-product-feature.dto'
import {ProductFeature} from '@modules/product-management/product-features/entities/product-feature.entity'
import {ProductFeaturesRepository} from '@modules/product-management/product-features/repository/product-features.repository'

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

    const product = await this.productService.findOne(productFeature.ProductId)
    if (!product) {
      throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductFeature.Product = product

    const feature = await this.featureService.findOne(productFeature.FeatureId)
    if (!feature) {
      throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductFeature.Feature = feature

    const unitProduct = await this.unitProductService.findOne(productFeature.FeatureId)
    if (!feature) {
      throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductFeature.UnitProduct = unitProduct

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
        acc[feature.Id] = products
      })
      return acc
    }, {})

    return featureProductsCompare
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.productFeaturesRepository.softDelete({Id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The productFeature does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.productFeaturesRepository.recover({Id: id})
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
    if (newProductFeature.Product.Id != productFeature.ProductId) {
      const product = await this.productService.findOne(productFeature.ProductId)
      if (!product) {
        throw new HttpException({message: 'The product are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductFeature.Product = product
    }

    if (newProductFeature.Feature.Id != productFeature.FeatureId) {
      const feature = await this.featureService.findOne(productFeature.FeatureId)
      if (!feature) {
        throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductFeature.Feature = feature
    }

    if (newProductFeature.UnitProduct.Id != productFeature.UnitProductId) {
      const unitProduct = await this.unitProductService.findOne(productFeature.UnitProductId)
      if (!unitProduct) {
        throw new HttpException({message: 'The feature are not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductFeature.UnitProduct = unitProduct
    }
    this.productFeaturesRepository.merge(newProductFeature, productFeature)

    const result = await this.productFeaturesRepository.save(newProductFeature)

    return result
  }

  async findOne(id: number): Promise<ProductFeature> {
    const result = await this.productFeaturesRepository.findOne({
      where: {Id: id},
    })
    return result
  }

  async findByProduct(idProduct: number): Promise<ProductFeature[]> {
    const result = await this.productFeaturesRepository.find({
      where: {Product: {Id: idProduct}},
    })
    return result
  }

  async findAll(): Promise<ProductFeature[]> {
    const result = await this.productFeaturesRepository.find({withDeleted: true})
    return result
  }
}
