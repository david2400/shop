import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Client} from '@modules/account/client/entities/client.entity'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'

@Injectable()
export class ClientRepository extends BaseAbstractRepository<Client> {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ) {
    super(clientRepository)
  }
}
