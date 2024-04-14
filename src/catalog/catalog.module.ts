import {Module} from '@nestjs/common'
import {BrandModule} from '@modules/catalog/brand/brand.module'
import {CategoryModule} from '@modules/catalog/category/category.module'
import {SubcategoryModule} from '@modules/catalog/subcategory/subcategory.module'

@Module({
  imports: [BrandModule, CategoryModule, SubcategoryModule],
  exports: [BrandModule, CategoryModule, SubcategoryModule],
})
export class CatalogModule {}
