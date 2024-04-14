import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {Supplier} from '@modules/inventory/supplier/entities/supplier.entity'
import {BaseAbstractRepository} from '@common/repository/base.abstract.repository'

@Injectable()
export class SupplierRepository extends BaseAbstractRepository<Supplier> {
  constructor(
    @InjectRepository(Supplier)
    private readonly supplierRepository: Repository<Supplier>
  ) {
    super(supplierRepository)
  }
}
