import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {Category} from '@modules/catalog/category/entities/category.entity'
import {CategoryRepository} from '@modules/catalog/category/repository/category.repository'
import {CategoryService} from '@modules/catalog/category/services/impl/category.service'
import {CategoryController} from '@modules/catalog/category/controller/category.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
