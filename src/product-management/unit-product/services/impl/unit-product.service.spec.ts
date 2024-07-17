import {Test, TestingModule} from '@nestjs/testing'
import {UnitProductService} from '@modules/product-management/unit-product/services/impl/unit-product.service'

describe('UnitProductService', () => {
  let service: UnitProductService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitProductService],
    }).compile()

    service = module.get<UnitProductService>(UnitProductService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
