import {Test, TestingModule} from '@nestjs/testing'
import {UnitProductController} from '@modules/product-management/unit-product/controller/unit-product.controller'
import {UnitProductService} from '@modules/product-management/unit-product/services/impl/unit-product.service'

describe('UnitProductController', () => {
  let controller: UnitProductController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitProductController],
      providers: [UnitProductService],
    }).compile()

    controller = module.get<UnitProductController>(UnitProductController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
