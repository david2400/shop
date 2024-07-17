import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common'
import {UpdateResult} from 'typeorm'
import {PlansService} from '@modules/userPreferences/plans/services/impl/plans.service'
import {CreatePlanDto} from '@modules/userPreferences/plans/dto/create-plan.dto'
import {UpdatePlanDto} from '@modules/userPreferences/plans/dto/update-plan.dto'
import {ApiOperation, ApiResponse} from '@nestjs/swagger'
import {Plan} from '../entities/plan.entity'

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) {}

  @ApiOperation({summary: 'Crear un plano de configuracion'})
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
    type: CreatePlanDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createPlan(@Body(new ValidationPipe()) plan: CreatePlanDto) {
    const results = await this.plansService.createPlan(plan)

    return results
  }

  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @ApiOperation({summary: 'Modifica plano de configuracion'})
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
  async updatePlan(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) plan: UpdatePlanDto
  ) {
    const result = await this.plansService.update(id, plan)

    return result
  }

  @ApiOperation({summary: 'Eliminar un plano de configuracion'})
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
    const result = await this.plansService.delete(id)

    return result
  }

  @ApiOperation({summary: 'Restaurar un plano de configuracion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: UpdatePlanDto,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get('restore/:id')
  async restoreBrand(@Param('id', ParseIntPipe) id: number) {
    const result = await this.plansService.restore(id)

    return result
  }

  @ApiOperation({summary: 'Buscar todas los registros d plano de configuracion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: [Plan],
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get()
  async findAll() {
    const result = await this.plansService.findAll()

    return result
  }

  @ApiOperation({summary: 'Buscar un plano de configuracion'})
  @ApiResponse({
    status: 500,
    description: 'server error',
  })
  @ApiResponse({
    status: 200,
    description: 'success register',
    type: Plan,
  })
  //   @UseGuards(JwtAuthGuard, RolesGuard)
  //   @hasRoles(Role.ESTUDENT, Role.ADMIN)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const result = await this.plansService.findOne(id)

    return result
  }
}
