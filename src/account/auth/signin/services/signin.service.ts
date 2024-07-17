import {
  Injectable,
  Inject,
  forwardRef,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import {jwtConstants} from '@/constants'
import type {JwtPayload} from '@common/interface/login/signin.interface'
import {ClientService} from '@modules/account/client/services/impl/client.service'
import {CreateSigninDto} from '@modules/account/auth/signin/dto/create-signin.dto'

@Injectable()
export class SigninService {
  constructor(
    @Inject(forwardRef(() => ClientService)) private clientServices: ClientService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async comparePasswords(newPassword: string, hashPassword: string): Promise<boolean | any> {
    const isMatch = (await bcrypt.compare(newPassword, hashPassword)) || false
    return isMatch
  }

  async decodeToken(token: string): Promise<any> {
    const result = this.jwtService.decode(token)
    const currentDate = new Date()
    const expireDate = new Date(result.exp)

    // return {
    //   sub: result.sub,
    //   roles: result.role,
    //   username: result.username,
    //   isExpired: +expireDate <= +currentDate / 1000,
    // }

    return result
  }

  private getRefreshToken(sub: number): string {
    return this.jwtService.sign(
      {sub},
      {
        secret: jwtConstants.secret,
        expiresIn: '7d', // Set greater than the expiresIn of the access_token
      }
    )
  }

  async generateTokenJWT(client: any) {
    const payload: JwtPayload = {
      sub: client.id,
      username: client.username,
      roles: client.user_role,
    }

    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.getRefreshToken(payload.sub),
    }
  }

  async login(loginUserDto: CreateSigninDto): Promise<any> {
    const client = await this.clientServices.findOneByUsername(loginUserDto.username)
    if (!client) {
      throw new HttpException({message: 'User not found'}, HttpStatus.NOT_FOUND)
    }
    const isMatchPassword = await this.comparePasswords(loginUserDto.password, client.password)

    if (!client || !isMatchPassword) {
      throw new HttpException({message: 'password is not match'}, HttpStatus.NOT_FOUND)
    }
    const token = await this.generateTokenJWT(client)

    await this.clientServices.updateUserRefreshToken(client.id, token.refresh_token)

    const resObj = {
      id: client.id,
      role: client,
      token: token,
    }
    return resObj
  }

  async logout(user_id: number) {
    return await this.clientServices.removeRefreshToken(user_id)
  }
}
