import {ApiProperty} from '@nestjs/swagger'
import {BaseDto} from '@/common/class/base.abstract.dto'
import {IsNotEmpty, IsString} from 'class-validator'

export class CreateBrandDto extends BaseDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string
}
