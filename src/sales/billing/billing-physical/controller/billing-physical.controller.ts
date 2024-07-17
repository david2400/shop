import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {CreateBillingPhysicalDto} from '../dto/create-billing-physical.input'
import {UpdateBillingPhysicalDto} from '../dto/update-billing-physical.input'
import {BillingPhysicalService} from '../services/impl/billing-physical.service'

@ApiTags('billing-physical')
@Controller('billing-physical')
export class BillingPhysicalController {
  constructor(private readonly billingPhysicalService: BillingPhysicalService) {}

  // @ApiOperation({summary: 'crear marca'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 201,
  //   description: 'success register',
  //   type: CreateBillingPhysicalDto,
  // })
  // @HttpCode(HttpStatus.CREATED)
  // @Post()
  // async createSupplier(@Body(new ValidationPipe()) billingPhysical: CreateBillingPhysicalDto) {
  //   const result = await this.billingPhysicalService.create(billingPhysical)

  //   return result
  // }

  // @ApiOperation({summary: 'crear marca'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'success register',
  //   type: UpdateResult,
  // })
  // //   @UseGuards(JwtAuthGuard, RolesGuard)
  // //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // @Patch(':id')
  // async updateSupplier(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body(new ValidationPipe()) billingPhysical: UpdateBillingPhysicalDto
  // ) {
  //   const result = await this.billingPhysicalService.update(id, billingPhysical)

  //   return result
  // }

  // @ApiOperation({summary: 'crear marca'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'success register',
  //   type: UpdateResult,
  // })
  // //   @UseGuards(JwtAuthGuard, RolesGuard)
  // //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // @Delete(':id')
  // async delete(@Param('id', ParseIntPipe) id: number) {
  //   const result = await this.billingPhysicalService.delete(id)

  //   return result
  // }

  // @ApiOperation({summary: 'crear marca'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'success register',
  //   type: UpdateBillingPhysicalDto,
  // })
  // //   @UseGuards(JwtAuthGuard, RolesGuard)
  // //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // @Get('restore/:id')
  // async restore(@Param('id', ParseIntPipe) id: number) {
  //   const result = await this.billingPhysicalService.restore(id)

  //   return result
  // }

  // @ApiOperation({summary: 'crear marca'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'success register',
  //   type: [supplier],
  // })
  // //   @UseGuards(JwtAuthGuard, RolesGuard)
  // //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // @Get()
  // async findAll() {
  //   const result = await this.billingPhysicalService.findAll()
  //   return result
  // }

  // @ApiOperation({summary: 'crear marca'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'success register',
  //   type: supplier,
  // })
  // //   @UseGuards(JwtAuthGuard, RolesGuard)
  // //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // @Get(':id')
  // async findOne(@Param('id', ParseIntPipe) id: number) {
  //   const result = await this.billingPhysicalService.findOne(id)

  //   return result
  // }
}
