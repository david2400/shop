import {Test, TestingModule} from '@nestjs/testing'
import {ProductFeaturesService} from '@/src/product-management/product-features/services/product-features.service'

describe('ProductFeaturesService', () => {
  let service: ProductFeaturesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductFeaturesService],
    }).compile()

    service = module.get<ProductFeaturesService>(ProductFeaturesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
