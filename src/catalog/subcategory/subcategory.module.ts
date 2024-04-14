import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {CategoryModule} from '@modules/catalog/category/category.module'
import {Subcategory} from '@modules/catalog/subcategory/entities/subcategory.entity'
import {SubcategoryRepository} from '@modules/catalog/subcategory/repository/subcategory.repository'
import {SubcategoryService} from '@modules/catalog/subcategory/services/subcategory.service'
import {SubcategoryController} from '@modules/catalog/subcategory/controller/subcategory.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Subcategory]), CategoryModule],
  providers: [SubcategoryService, SubcategoryRepository],
  exports: [SubcategoryService],
  controllers: [SubcategoryController],
})
export class SubcategoryModule {}
