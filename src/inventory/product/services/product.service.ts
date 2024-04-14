import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {DeepPartial, UpdateResult} from 'typeorm'
import {BrandService} from '@modules/catalog/brand/services/brand.service'
import {SubcategoryService} from '@modules/catalog/subcategory/services/subcategory.service'
import {SupplierService} from '@modules/inventory/supplier/services/supplier.service'
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

    const brand = await this.brandService.findOne(product.BrandId)
    if (!brand) {
      throw new HttpException({message: 'The brand does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProduct.Brand = brand

    const subcategory = await this.subcategoryService.findOne(product.SubcategoryId)
    if (!subcategory) {
      throw new HttpException({message: 'The category does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProduct.Subcategory = subcategory

    const supplier = await this.supplierService.findOne(product.SupplierId)
    if (!supplier) {
      throw new HttpException({message: 'The supplier does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProduct.Supplier = supplier

    const results = await this.productRepository.save(newProduct)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.productRepository.softDelete({Id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The product does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.productRepository.recover({Id: id})
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

    if (newProduct.Brand.Id != product.BrandId) {
      const brand = await this.brandService.findOne(product.BrandId)
      if (!brand) {
        throw new HttpException({message: 'The brand does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProduct.Brand = brand
    }

    if (newProduct.Subcategory.Id != product.SubcategoryId) {
      const subcategory = await this.subcategoryService.findOne(product.SubcategoryId)
      if (!subcategory) {
        throw new HttpException({message: 'The category does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProduct.Subcategory = subcategory
    }

    if (newProduct.Supplier.Id != product.SupplierId) {
      const supplier = await this.supplierService.findOne(product.SupplierId)
      if (!supplier) {
        throw new HttpException({message: 'The supplier does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProduct.Supplier = supplier
    }

    this.productRepository.merge(newProduct, product)

    const result = await this.productRepository.save(newProduct)

    return result
  }

  async findOneByName(product: any): Promise<Product[]> {
    const result = await this.productRepository.find({
      where: {Name: product.Name},
    })
    return result
  }

  async findOne(id: number): Promise<Product> {
    const result = await this.productRepository.findOne({
      where: {Id: id},
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
