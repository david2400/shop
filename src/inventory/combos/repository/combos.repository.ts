import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Combo} from '@modules/inventory/combos/entities/combo.entity'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'

@Injectable()
export class ComboRepository extends BaseAbstractRepository<Combo> {
  constructor(
    @InjectRepository(Combo)
    private readonly comboRepository: Repository<Combo>
  ) {
    super(comboRepository)
  }
}
