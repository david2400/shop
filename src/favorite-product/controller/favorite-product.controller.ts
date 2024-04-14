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
  ValidationPipe,
} from '@nestjs/common'
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import {UpdateResult} from 'typeorm'
import {FavoriteProductService} from '@modules/favorite-product/services/favorite-product.service'
import {CreateFavoriteProductDto} from '@modules/favorite-product/dto/create-favorite-product.dto'

@ApiTags('favorite-product')
@Controller('favorite-product')
export class FavoriteProductController {
  constructor(private favoriteProductService: FavoriteProductService) {}

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 201,
    description: 'success register',
    type: CreateFavoriteProductDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async addFavorite(@Body(new ValidationPipe()) favoriteProduct: CreateFavoriteProductDto) {
    const result = await this.favoriteProductService.createFavorite(favoriteProduct)

    return result
  }

  @ApiOperation({summary: 'crear marca'})
  @ApiResponse({
    status: 500,
    description: 'server error',
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

  @ApiOperation({summary: 'crear marca'})
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

  @ApiOperation({summary: 'crear marca'})
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
  @Get('find/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.favoriteProductService.findOne(id)

    return result
  }
}
