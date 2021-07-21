import { Controller, Get } from '@nestjs/common'
import { AppService } from '@modules/user/user.service'

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public hello() {
    return this.appService.getMessage()
  }
}
