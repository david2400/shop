import {HttpException, HttpStatus, Injectable} from '@nestjs/common'
// import {MailerService} from '@nestjs-modules/mailer'
// import {ProfileService} from '@modules/security/profile/services/profile.service'
import {Client} from '@modules/account/client/entities/client.entity'
import {CreateClientDto} from '@modules/account/client/dto/create-client.dto'
import {UpdateClientDto} from '@modules/account/client/dto/update-client.dto'
import {ClientRepository} from '@modules/account/client/repository/client.repository'

@Injectable()
export class ClientService {
  constructor(
    private clientRepository: ClientRepository //, private profileService: ProfileService
  ) {}

  async createClient(client: CreateClientDto) {
    const result =
      (await this.findOneByEmail(client.Email)) || (await this.findOneByUsername(client.Username))
    if (result != null) {
      throw new HttpException({message: 'Client already registered'}, HttpStatus.NOT_FOUND)
    }
    const newClient = this.clientRepository.create(client)

    // const profile = await this.profileService.findOne(client.ProfileId)
    // if (!profile) {
    //   throw new HttpException({message: 'The profile does not exist!'}, HttpStatus.NOT_FOUND)
    // }
    // newClient.Profile = profile

    const results = await this.clientRepository.save(newClient)
    // const sendEmail = await this.sendEmail()

    return results
  }

  async delete(id: number) {
    const result = await this.clientRepository.softDelete({Id: id})
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'Client does not exist or could not be deleted!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async findOneByUsername(username: string): Promise<UpdateClientDto> {
    const result = await this.clientRepository.findOne({
      // relations: {
      //   Profile: true,
      // },
      where: {Username: username},
    })
    return result
  }

  async findOneByEmail(email: string): Promise<any> {
    const result = await this.clientRepository.findOne({
      where: {Email: email},
    })

    return result
  }

  async findOne(id: number): Promise<Client> {
    const result = await this.clientRepository.findOne({
      where: {Id: id},
    })
    return result
  }

  async findAll(): Promise<UpdateClientDto[]> {
    const result = await this.clientRepository.find({withDeleted: true})
    return result
  }

  async getRefreshTokenOfUserId(clientId: number) {
    const result = await this.clientRepository.findOne({
      select: {Id: true, Username: true, RefreshToken: true},
      where: {Id: clientId},
    })

    return result
  }

  async restore(id: number) {
    const result = await this.clientRepository.recover({Id: id})
    if (result.DeleteAt === undefined) {
      throw new HttpException(
        {message: 'client does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async removeRefreshToken(clientId: number): Promise<any> {
    const result = await this.clientRepository.update(
      {Id: clientId},
      {
        RefreshToken: null,
      }
    )
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'Client does not exist or could not be restored!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  async updateClient(id: number, client: UpdateClientDto) {
    const newClient = await this.findOne(id)
    if (!newClient) {
      throw new HttpException(
        {message: 'Client does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }

    // if (newClient.Profile.Id != client.ProfileId) {
    //   const profile = await this.profileService.findOne(client.ProfileId)
    //   if (!profile) {
    //     throw new HttpException({message: 'The profile does not exist!'}, HttpStatus.NOT_FOUND)
    //   }
    //   newClient.Profile = profile
    // }

    this.clientRepository.merge(newClient, client)

    const result = await this.clientRepository.save(newClient)

    return result
  }

  async updateUserRefreshToken(clientId: number, refreshToken) {
    const hashRefreshToken = refreshToken

    const result = await this.clientRepository.update(
      {Id: clientId},
      {
        RefreshToken: hashRefreshToken,
      }
    )
    if (result.affected === 0) {
      throw new HttpException(
        {message: 'Client does not exist or could not be modify!'},
        HttpStatus.NOT_FOUND
      )
    }
    return result
  }

  // async sendEmail() {
  //   return this.mailerService
  //     .sendMail({
  //       to: 'davi42@hotmail.es',
  //       from: 'davi42@hotmail.es',
  //       subject: 'Testing Nest MailerModule ✔',
  //       template: 'index',
  //       context: {
  //         code: 'cf1a3f828287',
  //         username: 'john doe',
  //       },
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       return data
  //     })
  //     .catch((error) => {
  //       throw new NotFoundException('')
  //     })
  // }
}
