import {Test, TestingModule} from '@nestjs/testing'
import {ComboProductService} from '@modules/inventory/combo-product/services/combo-product.service'

describe('ComboProductService', () => {
  let service: ComboProductService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComboProductService],
    }).compile()

    service = module.get<ComboProductService>(ComboProductService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
