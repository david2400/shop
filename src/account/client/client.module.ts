import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
// import {ProfileModule} from '@modules/security/profile/profile.module'
import {Client} from '@modules/account/client/entities/client.entity'
import {ClientRepository} from '@modules/account/client/repository/client.repository'
import {ClientService} from '@modules/account/client/services/impl/client.service'
import {ClientController} from '@modules/account/client/controller/client.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService, ClientRepository],
  exports: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
