import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Supplier} from '@modules/inventory/supplier/entities/supplier.entity'
import {CreateSupplierDto} from '@modules/inventory/supplier/dto/create-supplier.dto'
import {UpdateSupplierDto} from '@modules/inventory/supplier/dto/update-supplier.dto'
import {SupplierRepository} from '@modules/inventory/supplier/repository/supplier.repository'

@Injectable()
export class SupplierService {
  constructor(private supplierRepository: SupplierRepository) {}

  async create(supplier: CreateSupplierDto): Promise<any> {
    const results = await this.findOneByName(supplier)
    if (results.length != 0) {
      throw new HttpException({message: 'The supplier already registered!'}, HttpStatus.FOUND)
    }
    const newSupplier = this.supplierRepository.create(supplier)

    this.supplierRepository.merge(newSupplier, supplier)

    const result = await this.supplierRepository.save(newSupplier)

    return result
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.supplierRepository.softDelete({Id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The supplier does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.supplierRepository.recover({Id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The supplier does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, supplier: UpdateSupplierDto): Promise<UpdateResult> {
    const newSupplier = this.supplierRepository.create(supplier)

    this.supplierRepository.merge(newSupplier, supplier)

    const result = await this.supplierRepository.update(id, newSupplier)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The supplier does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    return result
  }

  async findOneByName(supplier: any): Promise<Supplier[]> {
    const result = await this.supplierRepository.find({
      where: {Name: supplier.Name},
    })
    return result
  }

  async findOne(id: number): Promise<Supplier> {
    const result = await this.supplierRepository.findOne({
      where: {Id: id},
    })
    return result
  }

  async findAll(): Promise<Supplier[]> {
    const result = await this.supplierRepository.find({withDeleted: true})
    return result
  }
}
