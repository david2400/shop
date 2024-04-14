import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Brand} from '@modules/catalog/brand/entities/brand.entity'
import {BrandRepository} from '@modules/catalog/brand/repository/brand.repository'
import {BrandService} from '@modules/catalog/brand/services/brand.service'
import {BrandController} from '@modules/catalog/brand/controller/brand.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  controllers: [BrandController],
  exports: [BrandService],
  providers: [BrandService, BrandRepository],
})
export class BrandModule {}
