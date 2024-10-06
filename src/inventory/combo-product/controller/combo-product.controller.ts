import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {ApiTags} from '@nestjs/swagger'
import {ComboProductService} from '@/src/inventory/combo-product/services/combo-product.service'
import {CreateComboProductDto} from '@modules/inventory/combo-product/dto/create-combo-product.dto'
import {UpdateComboProductDto} from '@modules/inventory/combo-product/dto/update-combo-product.dto'

@ApiTags('combo-product')
@Controller('combo-product')
export class ComboProductController {
  constructor(private readonly comboProductService: ComboProductService) {}

  @Post()
  create(@Body() createComboProductDto: CreateComboProductDto) {
    return this.comboProductService.create(createComboProductDto)
  }

  @Get()
  findAll() {
    return this.comboProductService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comboProductService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComboProductDto: UpdateComboProductDto) {
    return this.comboProductService.update(+id, updateComboProductDto)
  }
}
