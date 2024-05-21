import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'
import {Bill} from '@modules/sales/billing/bill/entities/bill.entity'

@Injectable()
export class BillRepository extends BaseAbstractRepository<Bill> {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<Bill>
  ) {
    super(billRepository)
  }
}
