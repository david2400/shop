import {ApiProperty} from '@nestjs/swagger'
import {PartialType} from '@nestjs/mapped-types'
import {IsNumber, IsOptional} from 'class-validator'
import {CreateClientDto} from '@modules/account/client/dto/create-client.dto'

export class UpdateClientDto extends PartialType(CreateClientDto) {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly id: number
}
