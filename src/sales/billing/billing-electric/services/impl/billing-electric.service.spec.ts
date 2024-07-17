import {Test, TestingModule} from '@nestjs/testing'
import {BillingElectricService} from '@modules/sales/billing/billing-electric/services/impl/billing-electric.service'

describe('BillingElectricService', () => {
  let service: BillingElectricService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingElectricService],
    }).compile()

    service = module.get<BillingElectricService>(BillingElectricService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
