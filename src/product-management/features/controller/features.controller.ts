import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  ParseIntPipe,
  HttpCode,
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {CreateFeatureDto} from '@modules/product-management/features/dto/create-feature.dto'
import {UpdateFeatureDto} from '@modules/product-management/features/dto/update-feature.dto'
import {FeaturesService} from '@modules/product-management/features/services/features.service'

@ApiTags('features')
@Controller('features')
export class FeaturesController {
  constructor(private readonly featuresService: FeaturesService) {}

  @ApiOperation({summary: 'Crear caracteristicas'})
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
    type: CreateFeatureDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createFeature(@Body(new ValidationPipe()) subcategory: CreateFeatureDto) {
    const result = await this.featuresService.create(subcategory)

    return result
  }

  @ApiOperation({summary: 'Modificar caracteristicas'})
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
    @Body(new ValidationPipe()) subcategory: UpdateFeatureDto
  ) {
    const result = await this.featuresService.update(id, subcategory)

    return result
  }

  @ApiOperation({summary: 'Eliminar caracteristicas'})
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
    const result = await this.featuresService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar caracteristicas'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateFeatureDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restoreFeature(@Param('id', ParseIntPipe) id: number) {
    const result = await this.featuresService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todas las caracteristicas'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateFeatureDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.featuresService.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar una caracteristica'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateFeatureDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.featuresService.findOne(id)

    return result
  }
}
