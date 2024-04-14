import {HttpException, HttpStatus, Inject, Injectable, forwardRef} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {ComboProductService} from '@modules/inventory/combo-product/services/combo-product.service'
import {Combo} from '@modules/inventory/combos/entities/combo.entity'
import {CreateComboDto} from '@modules/inventory/combos/dto/create-combo.dto'
import {UpdateComboDto} from '@modules/inventory/combos/dto/update-combo.dto'
import {ComboRepository} from '@modules/inventory/combos/repository/combos.repository'

@Injectable()
export class CombosService {
  constructor(
    private comboRepository: ComboRepository,
    @Inject(forwardRef(() => ComboProductService))
    private comboProductService: ComboProductService
  ) {}

  async create(productCombo: CreateComboDto): Promise<any> {
    const newProductCombo = this.comboRepository.create(productCombo)

    console.log(productCombo)
    console.log(newProductCombo)
    let results = await this.comboRepository.save(newProductCombo)
    console.log(results)
    const comboId = results.Id

    // Asignar el ID del combo a cada objeto dentro de combo_product
    if (comboId) {
      const comboProducts = productCombo.ComboProduct.map((cp) => {
        return {...cp, comboId: comboId}
      })
      console.log(comboProducts)
      results = await this.comboProductService.createMany(comboProducts)
    }

    return results
  }

  async delete(id: number): Promise<UpdateResult> {
    const result = await this.comboRepository.softDelete({Id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The combo does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async restore(id: number) {
    const result = await this.comboRepository.recover({Id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'The combo does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async update(id: number, product: UpdateComboDto): Promise<UpdateResult> {
    const newProduct = this.comboRepository.create(product)
    const result = await this.comboRepository.update({Id: id}, newProduct)
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'The combo does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  // async findOneByName(product: any): Promise<Combo[]> {
  //   const result = await this.comboRepository.find({
  //     where: {combo_product: {id: product.id}},
  //   })
  //   return result
  // }

  async findOne(id: number): Promise<Combo> {
    const result = await this.comboRepository.findOne({
      where: {Id: id},
    })
    return result
  }

  async findAll(): Promise<Combo[]> {
    const result = await this.comboRepository.find({withDeleted: true})
    return result
  }
}
