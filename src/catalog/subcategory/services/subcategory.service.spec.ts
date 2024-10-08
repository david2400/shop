import {Test, TestingModule} from '@nestjs/testing'
import {SubcategoryService} from '@/src/catalog/subcategory/services/subcategory.service'

describe('SubcategoryService', () => {
  let service: SubcategoryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubcategoryService],
    }).compile()

    service = module.get<SubcategoryService>(SubcategoryService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
