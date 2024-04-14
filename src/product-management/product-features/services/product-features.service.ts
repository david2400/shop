import {Injectable} from '@nestjs/common'
import {CreateProductFeatureDto} from '@modules/product-management/product-features/dto/create-product-feature.dto'
import {UpdateProductFeatureDto} from '@modules/product-management/product-features/dto/update-product-feature.dto'

@Injectable()
export class ProductFeaturesService {
  create(createProductFeatureDto: CreateProductFeatureDto) {
    return 'This action adds a new productFeature'
  }

  findAll() {
    return `This action returns all productFeatures`
  }

  findOne(id: number) {
    return `This action returns a #${id} productFeature`
  }

  update(id: number, updateProductFeatureDto: UpdateProductFeatureDto) {
    return `This action updates a #${id} productFeature`
  }

  remove(id: number) {
    return `This action removes a #${id} productFeature`
  }
}
