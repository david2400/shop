import {Test, TestingModule} from '@nestjs/testing'
import {BillingPhysicalController} from '@modules/sales/billing/billing-physical/controller/billing-physical.controller'

describe('BillingPhysicalController', () => {
  let controller: BillingPhysicalController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingPhysicalController],
    }).compile()

    controller = module.get<BillingPhysicalController>(BillingPhysicalController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
