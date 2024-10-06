import {IsOptional, IsDate} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'

export class BaseDto {
  @IsOptional()
  @IsDate()
  @ApiProperty({type: Date, default: new Date(), required: false})
  readonly created_at: Date

  @IsOptional()
  @IsDate()
  @ApiProperty({required: false})
  readonly update_at: Date

  @IsOptional()
  @IsDate()
  @ApiProperty({required: false})
  readonly delete_at: Date
}
