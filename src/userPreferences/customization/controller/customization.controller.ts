import {Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common'
import {CustomizationService} from '@modules/userPreferences/customization/services/customization.service'
import {CreateCustomizationDto} from '@modules/userPreferences/customization/dto/create-customization.dto'
import {UpdateCustomizationDto} from '@modules/userPreferences/customization/dto/update-customization.dto'

@Controller('customization')
export class CustomizationController {
  constructor(private readonly CustomizationService: CustomizationService) {}

  @Post()
  create(@Body() createCustomizationDto: CreateCustomizationDto) {
    return this.CustomizationService.create(createCustomizationDto)
  }

  @Get()
  findAll() {
    return this.CustomizationService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CustomizationService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomizationDto: UpdateCustomizationDto) {
    return this.CustomizationService.update(+id, updateCustomizationDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CustomizationService.remove(+id)
  }
}
