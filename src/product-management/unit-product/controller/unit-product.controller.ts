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
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {CreateUnitProductDto} from '@modules/product-management/unit-product/dto/create-unit-product.dto'
import {UpdateUnitProductDto} from '@modules/product-management/unit-product/dto/update-unit-product.dto'
import {UnitProductService} from '@modules/product-management/unit-product/services/impl/unit-product.service'

@ApiTags('unitProduct')
@Controller('unitProduct')
export class UnitProductController {
  constructor(private readonly unitProductService: UnitProductService) {}

  @ApiOperation({summary: 'crear las unidades'})
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
    type: CreateUnitProductDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createUnit(@Body(new ValidationPipe()) unit: CreateUnitProductDto) {
    const result = await this.unitProductService.create(unit)

    return result
  }

  @ApiOperation({summary: 'crear las unidades'})
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
  async updateUnit(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) unit: UpdateUnitProductDto
  ) {
    const result = await this.unitProductService.update(id, unit)

    return result
  }

  @ApiOperation({summary: 'crear las unidades'})
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
    const result = await this.unitProductService.delete(id)

    return result
  }

  @ApiOperation({summary: 'crear las unidades'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateUnitProductDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.unitProductService.restore(id)

    return result
  }

  @ApiOperation({summary: 'crear las unidades'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateUnitProductDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.unitProductService.findAll()

    return result
  }

  @ApiOperation({summary: 'crear las unidades'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateUnitProductDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.unitProductService.findOne(id)

    return result
  }
}
