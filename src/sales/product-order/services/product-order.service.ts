import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {ProductService} from '@modules/inventory/product/services/product.service'
import {OrderService} from '@modules/sales/order/services/order.service'
import {ProductOrder} from '@modules/sales/product-order/entities/product-order.entity'
import {CreateProductOrderDto} from '@modules/sales/product-order/dto/create-product-order.dto'
import {UpdateProductOrderDto} from '@modules/sales/product-order/dto/update-product-order.dto'
import {ProductOrderRepository} from '@modules/sales/product-order/repository/product-order.repository'

@Injectable()
export class ProductOrderService {
  constructor(
    private productOrderRepository: ProductOrderRepository,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  async createProductOrder(productOrder: CreateProductOrderDto): Promise<any> {
    const newProdOrder = this.productOrderRepository.create(productOrder)

    const order = await this.orderService.findOne(productOrder.OrderId)
    if (!order) {
      throw new HttpException({message: 'The order does not exist!'}, HttpStatus.FOUND)
    }
    newProdOrder.order = order

    const product = await this.productService.findOne(productOrder.product_id)
    if (!product) {
      throw new HttpException({message: 'The product does not exist!'}, HttpStatus.NOT_FOUND)
    }
    newProdOrder.product = product

    this.productOrderRepository.merge(newProdOrder, productOrder)

    const result = await this.productOrderRepository.save(newProdOrder)
    return result
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.productOrderRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The product order does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.productOrderRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'The product order does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, productOrder: UpdateProductOrderDto): Promise<any> {
    const newProductOrder = await this.findOne(id)

    if (!newProductOrder) {
      throw new HttpException(
        {message: 'The product order does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    if (newProductOrder.product.id != productOrder.product_id) {
      const product = await this.productService.findOne(productOrder.product_id)
      if (!product) {
        throw new HttpException({message: 'The product does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductOrder.product = product
    }

    if (newProductOrder.order.id != productOrder.OrderId) {
      const order = await this.orderService.findOne(productOrder.OrderId)
      if (!order) {
        throw new HttpException({message: 'The order does not exist!'}, HttpStatus.NOT_FOUND)
      }
      newProductOrder.order = order
    }

    this.productOrderRepository.merge(newProductOrder, productOrder)

    const result = await this.productOrderRepository.save(newProductOrder)

    return result
  }

  async findOne(id: number): Promise<ProductOrder> {
    const result = await this.productOrderRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<UpdateProductOrderDto[]> {
    const result = await this.productOrderRepository.find({withDeleted: true})
    return result
  }
}
