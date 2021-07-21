import { Controller, Get } from '@nestjs/common'
import { UserService } from '@modules/user/user.service'

@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public hello() {
    return this.userService.getMessage()
  }
}
