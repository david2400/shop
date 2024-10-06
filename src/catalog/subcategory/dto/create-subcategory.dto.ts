import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty, IsNumber, IsString} from 'class-validator'
import {BaseDto} from '@/common/class/base.abstract.dto'

export class CreateSubcategoryDto extends BaseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  slug: string

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  category_id: number
}
