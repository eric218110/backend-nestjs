import { Injectable } from '@nestjs/common'
import { AddNewUser } from 'domain/useCases/user/AddNewUser'

@Injectable()
export class UserService implements AddNewUser.Protocol {
  public addUser({ email, name }: AddNewUser.Params): AddNewUser.Response {
    return {
      id: 'id',
      email,
      name
    }
  }
}
