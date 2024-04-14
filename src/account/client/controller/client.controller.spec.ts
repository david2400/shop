import {Test, TestingModule} from '@nestjs/testing'
import {ClientController} from '@modules/account/client/controller/client.controller'

describe('ClientController', () => {
  let controller: ClientController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientController],
    }).compile()

    controller = module.get<ClientController>(ClientController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
