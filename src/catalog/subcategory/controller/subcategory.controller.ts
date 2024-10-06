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
import {CreateSubcategoryDto} from '@modules/catalog/subcategory/dto/create-subcategory.dto'
import {UpdateSubcategoryDto} from '@modules/catalog/subcategory/dto/update-subcategory.dto'
import {SubcategoryService} from '@/src/catalog/subcategory/services/subcategory.service'

@ApiTags('subcategory')
@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}

  @ApiOperation({summary: 'Crear subcategoria'})
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
    type: CreateSubcategoryDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createSubcategory(@Body(new ValidationPipe()) subcategory: CreateSubcategoryDto) {
    const result = await this.subcategoryService.createSubcategory(subcategory)

    return result
  }

  @ApiOperation({summary: 'Modificar subcategoria'})
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
  async updateSubcategory(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) subcategory: UpdateSubcategoryDto
  ) {
    const result = await this.subcategoryService.update(id, subcategory)

    return result
  }

  @ApiOperation({summary: 'Eliminar subcategoria'})
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
    const result = await this.subcategoryService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar subcategoria'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateSubcategoryDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restoreSubcategory(@Param('id', ParseIntPipe) id: number) {
    const result = await this.subcategoryService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todas las subcategoria'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateSubcategoryDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.subcategoryService.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar una subcategoria'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateSubcategoryDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.subcategoryService.findOne(id)

    return result
  }
}
