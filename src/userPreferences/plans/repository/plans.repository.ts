import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Plan} from '@modules/userPreferences/plans/entities/plan.entity'

@Injectable()
export class PlansRepository extends BaseAbstractRepository<Plan> {
  constructor(
    @InjectRepository(PlansRepository)
    private readonly planRepository: Repository<Plan>
  ) {
    super(planRepository)
  }
}
