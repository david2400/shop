import {Module} from '@nestjs/common'
import {ClientModule} from '@modules/account/client/client.module'
import {AuthModule} from '@modules/account/auth/auth.module'

@Module({
  imports: [ClientModule, AuthModule],
  exports: [ClientModule, AuthModule],
})
export class AccountModule {}
