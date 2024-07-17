import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {BillService} from './services/impl/bill.service'
import {BillController} from './controller/bill.controller'
import {Bill} from './entities/bill.entity'
import {BillRepository} from './repository/bill.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  exports: [BillService],
  providers: [BillService, BillRepository],
  controllers: [BillController],
})
export class BillModule {}
