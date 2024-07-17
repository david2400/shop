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
  ParseIntPipe,
  ValidationPipe,
  Query,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {CreateProductFeatureDto} from '@modules/product-management/product-features/dto/create-product-feature.dto'
import {UpdateProductFeatureDto} from '@modules/product-management/product-features/dto/update-product-feature.dto'
import {ProductFeaturesService} from '@modules/product-management/product-features/services/impl/product-features.service'

@ApiTags('productFeatures')
@Controller('productFeatures')
export class ProductFeaturesController {
  constructor(private readonly productFeaturesService: ProductFeaturesService) {}

  @ApiOperation({summary: 'Crear las caracteristicas de un producto'})
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
    type: CreateProductFeatureDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createFeature(@Body(new ValidationPipe()) subcategory: CreateProductFeatureDto) {
    const result = await this.productFeaturesService.create(subcategory)

    return result
  }

  @ApiOperation({summary: 'Comparar las caracteristicas entre producto'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('comparate')
  async compareProducts(
    @Query('idProduct', ParseIntPipe) idProduct: number,
    @Query('idProductToCompare', ParseIntPipe) idProductToCompare: number
  ) {
    const result = await this.productFeaturesService.compare(idProduct, idProductToCompare)

    return result
  }

  @ApiOperation({summary: 'Modificar las caracteristicas de un producto'})
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
  async updateFeature(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) subcategory: UpdateProductFeatureDto
  ) {
    const result = await this.productFeaturesService.update(id, subcategory)

    return result
  }

  @ApiOperation({summary: 'Eliminar las caracteristicas de un producto'})
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
    const result = await this.productFeaturesService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar las caracteristicas de un producto'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateProductFeatureDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restoreFeature(@Param('id', ParseIntPipe) id: number) {
    const result = await this.productFeaturesService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar las caracteristicas de un producto'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateProductFeatureDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.productFeaturesService.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar una caracteristica de un producto'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateProductFeatureDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.productFeaturesService.findOne(id)

    return result
  }
}
