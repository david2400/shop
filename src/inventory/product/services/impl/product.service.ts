import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {DeepPartial, UpdateResult} from 'typeorm'
import {BrandService} from '@modules/catalog/brand/services/impl/brand.service'
import {SubcategoryService} from '@modules/catalog/subcategory/services/impl/subcategory.service'
import {SupplierService} from '@modules/inventory/supplier/services/impl/supplier.service'
import {Product} from '@modules/inventory/product/entities/product.entity'
import {CreateProductDto} from '@modules/inventory/product/dto/create-product.dto'
import {UpdateProductDto} from '@modules/inventory/product/dto/update-product.dto'
import {ProductRepository} from '@modules/inventory/product/repository/product.repository'

@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private brandService: BrandService,
    private supplierService: SupplierService,
    private subcategoryService: SubcategoryService
  ) {}

  async createProduct(product: CreateProductDto): Promise<any> {
    const result = await this.findOneByName(product)
    if (result.length != 0) {
      throw new HttpException({message: 'The product already registered!'}, HttpStatus.FOUND)
    }
    const newProduct = this.productRepository.create(product)

    const brand = await this.brandService.findOne(product.brand_id)
    if (!brand) {
      throw new HttpException({message: 'The brand does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProduct.brand = brand

    const subcategory = await this.subcategoryService.findOne(product.subcategory_id)
    if (!subcategory) {
      throw new HttpException({message: 'The category does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProduct.subcategory = subcategory

    const supplier = await this.supplierService.findOne(product.supplier_id)
    if (!supplier) {
      throw new HttpException({message: 'The supplier does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProduct.supplier = supplier

    this.productRepository.merge(newProduct, product)

    const results = await this.productRepository.save(newProduct)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.productRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The product does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.productRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The product does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, product: UpdateProductDto): Promise<any> {
    const newProduct = await this.findOne(id)

    if (!newProduct) {
      throw new HttpException(
        {message: 'The product does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    if (newProduct.brand.id != product.brand_id) {
      const brand = await this.brandService.findOne(product.brand_id)
      if (!brand) {
        throw new HttpException({message: 'The brand does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProduct.brand = brand
    }

    if (newProduct.subcategory.id != product.subcategory_id) {
      const subcategory = await this.subcategoryService.findOne(product.subcategory_id)
      if (!subcategory) {
        throw new HttpException({message: 'The category does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProduct.subcategory = subcategory
    }

    if (newProduct.supplier.id != product.supplier_id) {
      const supplier = await this.supplierService.findOne(product.supplier_id)
      if (!supplier) {
        throw new HttpException({message: 'The supplier does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProduct.supplier = supplier
    }

    this.productRepository.merge(newProduct, product)

    const result = await this.productRepository.save(newProduct)

    return result
  }

  async findOneByName(product: any): Promise<Product[]> {
    const result = await this.productRepository.find({
      where: {name: product.name},
    })
    return result
  }

  async findOne(id: number): Promise<Product> {
    const result = await this.productRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Product[]> {
    const result = await this.productRepository.find({withDeleted: true})
    return result
  }

  async findByIds(product: DeepPartial<Product[]>): Promise<Product[]> {
    const result = await this.productRepository.findByIds(product)
    return result
  }
}
