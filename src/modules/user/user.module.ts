import { Module } from '@nestjs/common'
import { AppController } from '@modules/user/user.controller'
import { AppService } from '@modules/user/user.service'

@Module({
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
