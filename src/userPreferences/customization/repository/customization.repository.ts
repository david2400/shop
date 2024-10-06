import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BaseAbstractRepository} from '@/common/class/base.abstract.repository'
import {Customization} from '@modules/userPreferences/customization/entities/customization.entity'

@Injectable()
export class CustomizationRepository extends BaseAbstractRepository<Customization> {
  constructor(
    @InjectRepository(Customization)
    private readonly customizationRepository: Repository<Customization>
  ) {
    super(customizationRepository)
  }
}
