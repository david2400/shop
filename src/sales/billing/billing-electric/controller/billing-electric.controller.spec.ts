import {Test, TestingModule} from '@nestjs/testing'
import {BillingElectricController} from './billing-electric.controller'

describe('BillingElectricController', () => {
  let controller: BillingElectricController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingElectricController],
    }).compile()

    controller = module.get<BillingElectricController>(BillingElectricController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
