import {Test, TestingModule} from '@nestjs/testing'
import {FavoriteProductService} from '@modules/userPreferences/favorite-product/services/favorite-product.service'

describe('FavoriteProductService', () => {
  let service: FavoriteProductService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteProductService],
    }).compile()

    service = module.get<FavoriteProductService>(FavoriteProductService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
