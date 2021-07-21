import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  public getMessage() {
    return {
      hello: 'world'
    }
  }
}
