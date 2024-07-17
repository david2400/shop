import {Test, TestingModule} from '@nestjs/testing'
import {PlansController} from '@modules/userPreferences/plans/controller/plans.controller'
import {PlansService} from '@modules/userPreferences/plans/services/impl/plans.service'

describe('PlansController', () => {
  let controller: PlansController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlansController],
      providers: [PlansService],
    }).compile()

    controller = module.get<PlansController>(PlansController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
