import {Test, TestingModule} from '@nestjs/testing'
import {FeaturesController} from '@modules/product-management/features/controller/features.controller'
import {FeaturesService} from '@modules/product-management/features/services/impl/features.service'

describe('FeaturesController', () => {
  let controller: FeaturesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeaturesController],
      providers: [FeaturesService],
    }).compile()

    controller = module.get<FeaturesController>(FeaturesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
