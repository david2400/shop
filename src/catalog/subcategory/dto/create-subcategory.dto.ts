import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsNumber, IsString} from 'class-validator'
import {BaseDto} from '@common/class/dto/base.abstract.dto'

export class CreateSubcategoryDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  Slug: string

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  CategoryId: number
}
