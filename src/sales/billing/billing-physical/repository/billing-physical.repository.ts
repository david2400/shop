import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {BillingPhysical} from '@modules/sales/billing/billing-physical/entities/billing-physical.entity'

@Injectable()
export class BillingPhysicalRepository extends BaseAbstractRepository<BillingPhysical> {
  constructor(
    @InjectRepository(BillingPhysical)
    private readonly billingPhysicalRepository: Repository<BillingPhysical>
  ) {
    super(billingPhysicalRepository)
  }
}
