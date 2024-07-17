import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {Bill} from '@modules/sales/billing/bill/entities/bill.entity'
import {CreateBillDto} from '@modules/sales/billing/bill/dto/create-bill.dto'
import {UpdateBillDto} from '@modules/sales/billing/bill/dto/update-bill.dto'
import {BillService} from '@modules/sales/billing/bill/services/impl/bill.service'

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 302,
    description: 'already registered',
  })
@ApiResponse({
    status: 201,
    description: 'success register',
    type: CreateBillDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createSupplier(@Body(new ValidationPipe()) bill: CreateBillDto) {
    const result = await this.billService.create(bill)

    return result
  }

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 404,
    description: 'not fount a register',
  })
@ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateResult,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async updateSupplier(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) bill: UpdateBillDto
  ) {
    const result = await this.billService.update(id, bill)

    return result
  }

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 404,
    description: 'not fount a register',
  })
@ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateResult,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    const result = await this.billService.delete(id)

    return result
  }

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateBillDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.billService.restore(id)

    return result
  }

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: [Bill],
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.billService.findAll()
    return result
  }

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: Bill,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.billService.findOne(id)

    return result
  }
}
