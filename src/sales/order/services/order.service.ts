import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Order} from '@modules/sales/order/entities/order.entity'
import {CreateOrderDto} from '@modules/sales/order/dto/create-order.dto'
import {UpdateOrderDto} from '@modules/sales/order/dto/update-order.dto'
import {OrderRepository} from '@modules/sales/order/repository/order.repository'

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(order: CreateOrderDto): Promise<any> {
    const newOrder = this.orderRepository.create(order)

    this.orderRepository.merge(newOrder, order)

    const result = await this.orderRepository.save(newOrder)

    return result
  }

  async delete(id: number): Promise<UpdateResult> {
    // const result = await this.orderRepository.query('CALL restore_inventory_product(?)', [id])
    const deleted = await this.orderRepository.softDelete({Id: id})

    if (deleted.affected === 0) {
      throw new HttpException(
        {message: 'The order does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return deleted
  }

  async update(id: number, order: UpdateOrderDto): Promise<UpdateResult> {
    const newOrder = this.orderRepository.create(order)

    this.orderRepository.merge(newOrder, order)

    const result = await this.orderRepository.update({id: id}, newOrder)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The order does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: {Id: id},
    })
    return order
  }

  async findAll(): Promise<Order[]> {
    const result = await this.orderRepository.find({withDeleted: true})
    return result
  }
}
