import {HttpException, HttpStatus, Inject, Injectable, forwardRef} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {CombosService} from '@modules/inventory/combos/services/combos.service'
import {ProductService} from '@modules/inventory/product/services/product.service'
import {ComboProduct} from '@modules/inventory/combo-product/entities/combo-product.entity'
import {CreateComboProductDto} from '@modules/inventory/combo-product/dto/create-combo-product.dto'
import {UpdateComboProductDto} from '@modules/inventory/combo-product/dto/update-combo-product.dto'
import {ComboProductRepository} from '@modules/inventory/combo-product/repository/combo-product.repository'

@Injectable()
export class ComboProductService {
  constructor(
    private comboProductRepository: ComboProductRepository,
    private productService: ProductService,
    private comboService: CombosService
  ) {}

  async create(productCombo: CreateComboProductDto): Promise<any> {
    const newProductCombo = this.comboProductRepository.create(productCombo)

    const product = await this.productService.findOne(productCombo.ProductId)
    if (!product) {
      throw new HttpException({message: 'The Product does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductCombo.Product = product

    const combo = await this.comboService.findOne(productCombo.ComboId)
    if (!combo) {
      throw new HttpException({message: 'The Combo does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProductCombo.Combo = combo

    const results = await this.comboProductRepository.save(newProductCombo)

    return results
  }

  async createMany(productCombo: Partial<CreateComboProductDto>[]): Promise<any> {
    const productsCombos = new Array<ComboProduct>()

    for (const comboProduct of productCombo) {
      const newProductCombo = this.comboProductRepository.create(comboProduct)

      const product = await this.productService.findOne(comboProduct.ProductId)
      if (!product) {
        throw new HttpException({message: 'The Product does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductCombo.Product = product

      const combo = await this.comboService.findOne(comboProduct.ComboId)
      if (!combo) {
        throw new HttpException({message: 'The Combo does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductCombo.Combo = combo

      productsCombos.push(newProductCombo)
    }

    if (productsCombos.length < 1) {
      throw new HttpException({message: 'Problems!'}, HttpStatus.BAD_REQUEST)
    }
    const savedProductCombo = await this.comboProductRepository.saveMany(productsCombos)

    return savedProductCombo
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.comboProductRepository.softDelete({Id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The combo does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.comboProductRepository.recover({Id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The combo does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, product: UpdateComboProductDto): Promise<UpdateResult> {
    const newProduct = this.comboProductRepository.create(product)
    const result = await this.comboProductRepository.update({id: id}, newProduct)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The combo does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  // async findOneByName(product: any): Promise<Combo[]> {
  //   const result = await this.comboProductRepository.find({
  //     where: {combo_product: {id: product.id}},
  //   })
  //   return result
  // }

  async findOne(id: number): Promise<ComboProduct> {
    const result = await this.comboProductRepository.findOne({
      where: {Id: id},
    })
    return result
  }

  async findAll(): Promise<ComboProduct[]> {
    const result = await this.comboProductRepository.find({withDeleted: true})
    return result
  }
}
