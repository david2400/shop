import {Test, TestingModule} from '@nestjs/testing'
import {FeaturesService} from '@/src/product-management/features/services/features.service'

describe('FeaturesService', () => {
  let service: FeaturesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeaturesService],
    }).compile()

    service = module.get<FeaturesService>(FeaturesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
