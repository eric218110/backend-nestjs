import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  public getMessage() {
    return {
      hello: 'world'
    }
  }
}
