import {ApiOperation, ApiResponse} from '@nestjs/swagger'
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
} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {CreateCustomizationDto} from '@modules/userPreferences/customization/dto/create-customization.dto'
import {UpdateCustomizationDto} from '@modules/userPreferences/customization/dto/update-customization.dto'
import {CustomizationService} from '@modules/userPreferences/customization/services/impl/customization.service'

@Controller('customization')
export class CustomizationController {
  constructor(private readonly customizationService: CustomizationService) {}

  @ApiOperation({summary: 'Crear una customizacion'})
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
    type: CreateCustomizationDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body(new ValidationPipe()) customization: CreateCustomizationDto) {
    const result = await this.customizationService.create(customization)

    return result
  }

  @ApiOperation({summary: 'Modificar una customizacion'})
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) customization: UpdateCustomizationDto
  ) {
    const result = await this.customizationService.update(id, customization)

    return result
  }

  @ApiOperation({summary: 'Eliminar una customizacion'})
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
    const result = await this.customizationService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar una customizacion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateCustomizationDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restore(@Param('id', ParseIntPipe) id: number) {
    const result = await this.customizationService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todas las customizacion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateCustomizationDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.customizationService.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar una customizacion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateCustomizationDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.customizationService.findOne(id)

    return result
  }
}
