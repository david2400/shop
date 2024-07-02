import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'
import {bill} from '@modules/sales/billing/bill/entities/bill.entity'

@Injectable()
export class BillRepository extends BaseAbstractRepository<bill> {
  constructor(
    @InjectRepository(bill)
    private readonly billRepository: Repository<bill>
  ) {
    super(billRepository)
  }
}
