import {Test, TestingModule} from '@nestjs/testing'
import {CombosController} from '@modules/inventory/combos/controller/combos.controller'
import {CombosService} from '@modules/inventory/combos/services/combos.service'

describe('CombosController', () => {
  let controller: CombosController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CombosController],
      providers: [CombosService],
    }).compile()

    controller = module.get<CombosController>(CombosController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
