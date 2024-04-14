import {Injectable} from '@nestjs/common'
import {CreateBillingElectricDto} from '@modules/sales/billing/billing-electric/dto/create-billing-electric.input'
import {UpdateBillingElectricDto} from '@modules/sales/billing/billing-electric/dto/update-billing-electric.input'

@Injectable()
export class BillingElectricService {
  create(createBillingElectricDto: CreateBillingElectricDto) {
    return 'This action adds a new billingElectric'
  }

  findAll() {
    return `This action returns all billingElectric`
  }

  findOne(id: number) {
    return `This action returns a #${id} billingElectric`
  }

  update(id: number, updateBillingElectricDto: UpdateBillingElectricDto) {
    return `This action updates a #${id} billingElectric`
  }

  remove(id: number) {
    return `This action removes a #${id} billingElectric`
  }
}
