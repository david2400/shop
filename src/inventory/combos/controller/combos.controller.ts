import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  HttpStatus,
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {CreateComboDto} from '@modules/inventory/combos/dto/create-combo.dto'
import {UpdateComboDto} from '@modules/inventory/combos/dto/update-combo.dto'
import {CombosService} from '@modules/inventory/combos/services/impl/combos.service'

@ApiTags('combos')
@Controller('combos')
export class CombosController {
  constructor(private readonly combosService: CombosService) {}

  @ApiOperation({summary: 'Crear un combo de productos'})
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
    type: CreateComboDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body(new ValidationPipe()) createProductComboDto: CreateComboDto) {
    return this.combosService.create(createProductComboDto)
  }

  @ApiOperation({summary: 'Buscar todos los combo de productos'})
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
  @Get()
  findAll() {
    return this.combosService.findAll()
  }

  @ApiOperation({summary: 'Buscar un combo de productos'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdateComboDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.combosService.findOne(+id)
  }

  @ApiOperation({summary: 'Modificar un combo de productos'})
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
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateProductComboDto: UpdateComboDto
  ) {
    return this.combosService.update(+id, updateProductComboDto)
  }

  // @ApiOperation({summary: 'crear un combo de productos'})
  // @ApiResponse({
  //   status: 500,
  //   description: 'server error',
  // })
  // @ApiResponse({
  //   status: 200,
  //   description: 'success register',
  //   type: UpdateResult,
  // })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  // @HttpCode(HttpStatus.OK)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.combosService.remove(+id)
  // }
}
