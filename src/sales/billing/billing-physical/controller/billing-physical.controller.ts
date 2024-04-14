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

@ApiTags('billing-physical')
@Controller('billing-physical')
export class BillingPhysicalController {}
