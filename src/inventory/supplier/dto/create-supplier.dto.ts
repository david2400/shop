import {ApiProperty} from '@nestjs/swagger'
import {IsEmail, IsNotEmpty, IsNumberString, IsString} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateSupplierDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string
}
