import {Test, TestingModule} from '@nestjs/testing'
import {BillingPhysicalService} from '@modules/sales/billing/billing-physical/services/billing-physical.service'

describe('BillingPhysicalService', () => {
  let service: BillingPhysicalService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingPhysicalService],
    }).compile()

    service = module.get<BillingPhysicalService>(BillingPhysicalService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
