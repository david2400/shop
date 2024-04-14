import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {UpdateComboProductDto} from '@modules/inventory/combo-product/dto/update-combo-product.dto'

export class ComboProductDto extends PartialType(UpdateComboProductDto) {}
