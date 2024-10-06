import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {FavoriteProductService} from '@modules/userPreferences/favorite-product/services/favorite-product.service'
import {CreateFavoriteProductDto} from '@modules/userPreferences/favorite-product/dto/create-favorite-product.dto'

@ApiTags('favorite-product')
@Controller('favorite-product')
export class FavoriteProductController {
  constructor(private favoriteProductService: FavoriteProductService) {}

  @ApiOperation({summary: 'Crear los productos favoritos'})
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
    type: CreateFavoriteProductDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createFavorite(@Body(new ValidationPipe()) favoriteProduct: CreateFavoriteProductDto) {
    const result = await this.favoriteProductService.createFavorite(favoriteProduct)

    return result
  }

  @ApiOperation({summary: 'Eliminar los productos favoritos'})
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
    const result = await this.favoriteProductService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todos los productos favoritos de un cliente'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: CreateFavoriteProductDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findAllFavoriteClient(@Param('id', ParseIntPipe) idClient: number) {
    const result = await this.favoriteProductService.findAllFavoriteClient(idClient)

    return result
  }

  @ApiOperation({summary: 'Buscar un producto favorito de un cliente'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: CreateFavoriteProductDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('find')
  async findOne(
    @Query('idClient', ParseIntPipe) idClient: number,
    @Query('idProduct', ParseIntPipe) idProduct: number
  ) {
    const result = await this.favoriteProductService.findOne({idClient, idProduct})

    return result
  }
}
