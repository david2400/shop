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
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {Supplier} from '@modules/inventory/supplier/entities/supplier.entity'
import {CreateSupplierDto} from '@modules/inventory/supplier/dto/create-supplier.dto'
import {UpdateSupplierDto} from '@modules/inventory/supplier/dto/update-supplier.dto'
import {SupplierService} from '@modules/inventory/supplier/services/impl/supplier.service'

@ApiTags('supplier')
@Controller('supplier')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @ApiOperation({summary: 'Crear proveedor'})
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
    type: CreateSupplierDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createSupplier(@Body(new ValidationPipe()) product: CreateSupplierDto) {
    const result = await this.supplierService.create(product)

    return result
  }

  @ApiOperation({summary: 'Modificar proveedor'})
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
    @Body(new ValidationPipe()) product: UpdateSupplierDto
  ) {
    const result = await this.supplierService.update(id, product)

    return result
  }

  @ApiOperation({summary: 'Eliminar proveedor'})
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
    const result = await this.supplierService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar proveedor'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateSupplierDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.supplierService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todos los proveedor'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: [Supplier],
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.supplierService.findAll()
    return result
  }

  @ApiOperation({summary: 'Buscar un proveedor'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: Supplier,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.supplierService.findOne(id)

    return result
  }
}
