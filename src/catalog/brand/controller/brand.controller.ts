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
  UseGuards,
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {Public} from '@common/decorators/public.decorator'
import {AuthGuard} from '@common/guards/auth/auth.guard'
import {CreateBrandDto} from '@modules/catalog/brand/dto/create-brand.dto'
import {UpdateBrandDto} from '@modules/catalog/brand/dto/update-brand.dto'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {BrandService} from '@modules/catalog/brand/services/impl/brand.service'

@ApiTags('brand')
@Controller('brand')
// @UseGuards(AuthGuard)
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Public()
  @ApiOperation({summary: 'Crear una marca'})
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
    type: UpdateBrandDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createBrand(@Body(new ValidationPipe()) createBrand: CreateBrandDto) {
    const results = await this.brandService.createBrand(createBrand)

    return results
  }

  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @ApiOperation({summary: 'Modificar marca'})
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
  async updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateBrand: UpdateBrandDto
  ) {
    const result = await this.brandService.update(id, updateBrand)

    return result
  }

  @ApiOperation({summary: 'Eliminar una marca'})
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
    const result = await this.brandService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar una marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateBrandDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restoreBrand(@Param('id', ParseIntPipe) id: number) {
    const result = await this.brandService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todas los registros de marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: [Brand],
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.brandService.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar una marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: Brand,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.brandService.findOne(id)

    return result
  }
}
