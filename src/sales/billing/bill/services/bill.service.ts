import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Bill} from '@modules/sales/billing/bill/entities/bill.entity'
import {CreateBillDto} from '@modules/sales/billing/bill/dto/create-bill.dto'
import {UpdateBillDto} from '@modules/sales/billing/bill/dto/update-bill.dto'
import {BillRepository} from '@modules/sales/billing/bill/repository/bill.repository'

@Injectable()
export class BillService {
  constructor(private billRepository: BillRepository) {}

  async create(bill: CreateBillDto): Promise<any> {
    const newBill = this.billRepository.create(bill)

    this.billRepository.merge(newBill, bill)

    const result = await this.billRepository.save(newBill)

    return result
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.billRepository.softDelete({id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The bill does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.billRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The bill does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, bill: UpdateBillDto): Promise<UpdateResult> {
    const newBill = this.billRepository.create(bill)

    this.billRepository.merge(newBill, bill)

    const result = await this.billRepository.update(id, newBill)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The bill does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOne(id: number): Promise<Bill> {
    const result = await this.billRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Bill[]> {
    const result = await this.billRepository.find({withDeleted: true})
    return result
  }
}
