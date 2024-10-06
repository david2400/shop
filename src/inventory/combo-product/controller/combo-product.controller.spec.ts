import {Test, TestingModule} from '@nestjs/testing'
import {ComboProductController} from '@modules/inventory/combo-product/controller/combo-product.controller'
import {ComboProductService} from '@/src/inventory/combo-product/services/combo-product.service'

describe('ComboProductController', () => {
  let controller: ComboProductController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComboProductController],
      providers: [ComboProductService],
    }).compile()

    controller = module.get<ComboProductController>(ComboProductController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
