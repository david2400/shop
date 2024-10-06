import {Injectable} from '@nestjs/common'
import {CreateBillingPhysicalDto} from '@modules/sales/billing/billing-physical/dto/create-billing-physical.input'
import {UpdateBillingPhysicalDto} from '@modules/sales/billing/billing-physical/dto/update-billing-physical.input'

@Injectable()
export class BillingPhysicalService {
  create(createBillingPhysicalDto: CreateBillingPhysicalDto) {
    return 'This action adds a new billingPhysical'
  }

  findAll() {
    return `This action returns all billingPhysical`
  }

  findOne(id: number) {
    return `This action returns a #${id} billingPhysical`
  }

  update(id: number, updateBillingPhysicalDto: UpdateBillingPhysicalDto) {
    return `This action updates a #${id} billingPhysical`
  }

  remove(id: number) {
    return `This action removes a #${id} billingPhysical`
  }
}
