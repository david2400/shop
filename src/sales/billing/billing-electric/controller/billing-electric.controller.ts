import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'

@ApiTags('billing-electric')
@Controller('billing-electric')
export class BillingElectricController {}
