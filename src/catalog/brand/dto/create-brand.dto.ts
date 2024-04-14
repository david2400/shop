import {ApiProperty} from '@nestjs/swagger'
import {BaseDto} from '@common/class/dto/base.abstract.dto'
import {IsNotEmpty, IsString} from 'class-validator'

export class CreateBrandDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  Name: string
}
