import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Plan} from '../entities/plan.entity'
import {PlansRepository} from '../repository/plans.repository'
import {CreatePlanDto} from '@modules/userPreferences/plans/dto/create-plan.dto'
import {UpdatePlanDto} from '@modules/userPreferences/plans/dto/update-plan.dto'

@Injectable()
export class PlansService {
  constructor(private plansRepository: PlansRepository) {}

  async createPlan(plan: CreatePlanDto): Promise<any> {
    const result = await this.findOneByName(plan)
    if (result.length != 0) {
      throw new HttpException({message: 'plan already registered exist!'}, HttpStatus.FOUND)
    }
    const newPlans = this.plansRepository.create(plan)

    this.plansRepository.merge(newPlans, plan)

    const results = await this.plansRepository.save(newPlans)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.plansRepository.softDelete({id: id})

    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The plan does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.plansRepository.recover({id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The plan does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, plan: UpdatePlanDto): Promise<any> {
    const newPlans = await this.findOne(id)

    if (!newPlans) {
      throw new HttpException(
        {message: 'The plan does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    this.plansRepository.merge(newPlans, plan)

    const result = await this.plansRepository.save(newPlans)

    return result
  }

  async findOneByName(plan: any): Promise<Plan[]> {
    const result = await this.plansRepository.find({
      where: {name: plan.name},
    })
    return result
  }

  async findOne(id: number): Promise<Plan> {
    const result = await this.plansRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Plan[]> {
    const result = await this.plansRepository.find({withDeleted: true})
    return result
  }
}
