import { Module } from '@nestjs/common'
import { UserModule } from '@modules/user/user.module'
import { DBModule } from '@infra/db/module/db.module'

@Module({
  imports: [UserModule, DBModule]
})
export class AppModule {}
