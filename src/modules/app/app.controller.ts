import { Controller, Get } from '@nestjs/common'

@Controller('')
export class AppController {
  @Get()
  /**
   * hello
   */
  public hello() {
    return {
      hello: 'world'
    }
  }
}
