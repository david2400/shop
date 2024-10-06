import {Test, TestingModule} from '@nestjs/testing'
import {ProductFeaturesController} from '@modules/product-management/product-features/controller/product-features.controller'
import {ProductFeaturesService} from '@/src/product-management/product-features/services/product-features.service'

describe('ProductFeaturesController', () => {
  let controller: ProductFeaturesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFeaturesController],
      providers: [ProductFeaturesService],
    }).compile()

    controller = module.get<ProductFeaturesController>(ProductFeaturesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
