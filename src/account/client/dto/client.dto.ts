import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {DeepPartial} from 'typeorm'
import {IsArray, IsOptional, ValidateNested} from 'class-validator'
import {UpdateClientDto} from '@modules/account/client/dto/update-client.dto'
import {FavoriteProductDto} from '@modules/favorite-product/dto/favorite-product.dto'

export class ClientDto extends PartialType(UpdateClientDto) {
  @ValidateNested()
  @IsArray()
  @IsOptional()
  @ApiProperty()
  FavoriteProduct?: DeepPartial<FavoriteProductDto[]>
}
