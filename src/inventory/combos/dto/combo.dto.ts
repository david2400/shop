import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {DeepPartial} from 'typeorm'
import {IsArray, IsOptional} from 'class-validator'
import {UpdateComboDto} from '@modules/inventory/combos/dto/update-combo.dto'
import {ComboProductDto} from '@modules/inventory/combo-product/dto/combo-product.dto'

export class ComboDto extends PartialType(UpdateComboDto) {}
