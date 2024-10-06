import {Global, Module, forwardRef} from '@nestjs/common'
import {JwtModule} from '@nestjs/jwt'
import {PassportModule} from '@nestjs/passport'
import {SigninService} from '@modules/account/auth/signin/services/signin.service'
import {ConfigService, ConfigModule} from '@nestjs/config'
import {JwtStrategy} from '@common/estrategy/jwtStrategy.strategy'
import {ClientModule} from '@modules/account/client/client.module'
import {SigninController} from '@modules/account/auth/signin/controller/signin.controller'

@Global()
@Module({
  providers: [SigninService, JwtStrategy],
  imports: [
    ClientModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('jwtSecret'),
        signOptions: {
          expiresIn: configService.get<string>('jwtTimeout'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [SigninService],
  controllers: [SigninController],
})
export class SigninModule {}
