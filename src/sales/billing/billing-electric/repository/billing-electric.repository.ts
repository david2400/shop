import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {BillingElectric} from '@modules/sales/billing/billing-electric/entities/billing-electric.entity'

@Injectable()
export class BillingElectricRepository extends BaseAbstractRepository<BillingElectric> {
  constructor(
    @InjectRepository(BillingElectric)
    private readonly billingElectricRepository: Repository<BillingElectric>
  ) {
    super(billingElectricRepository)
  }
}
