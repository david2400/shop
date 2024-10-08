import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {BrandDto} from '@modules/catalog/brand/dto/brand.dto'
import {CreateBrandDto} from '@modules/catalog/brand/dto/create-brand.dto'
import {UpdateBrandDto} from '@modules/catalog/brand/dto/update-brand.dto'
import {BrandRepository} from '@modules/catalog/brand/repository/brand.repository'
// import {IBrand} from '@modules/catalog/brand/services/interface/brand.interface'

@Injectable()
export class BrandService {
  constructor(private brandRepository: BrandRepository) {}

  async createBrand(brand: CreateBrandDto): Promise<any> {
    const result = await this.findOneByName(brand)
    if (result.length != 0) {
      throw new HttpException({message: 'brand already exist!'}, HttpStatus.FOUND)
    }
    const newBrand = this.brandRepository.create(brand)

    this.brandRepository.merge(newBrand, brand)

    const results = await this.brandRepository.save(newBrand)

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.brandRepository.softDelete({id: id})

    if (result.affected === 0) {
      throw new HttpException('brand does not exist or could not be deleted!', HttpStatus.NOT_FOUND)
    }
    return result
  }

  async restore(id: number): Promise<UpdateBrandDto> {
    const result = await this.brandRepository.recover({id: id})
    if (result.delete_at === undefined) {
      throw new HttpException(
        {message: 'brand does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, brand: UpdateBrandDto): Promise<UpdateResult> {
    const newBrand = this.brandRepository.create(brand)

    this.brandRepository.merge(newBrand, brand)

    const result = await this.brandRepository.update({id: id}, newBrand)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'brand does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async findOneByName(brand: any): Promise<Brand[]> {
    const result = await this.brandRepository.find({
      where: {name: brand.name},
    })
    return result
  }

  async findOne(id: number): Promise<Brand> {
    const result = await this.brandRepository.findOne({
      where: {id: id},
    })
    return result
  }

  async findAll(): Promise<Brand[]> {
    const result = await this.brandRepository.find({withDeleted: true})
    return result
  }
}
