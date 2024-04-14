import {ApiProperty} from '@nestjs/swagger'
import {IsEmail, IsNotEmpty, IsNumberString, IsString} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateSupplierDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Name: string

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty()
  Phone: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Address: string

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  Email: string
}
