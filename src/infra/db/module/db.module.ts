import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as config from '@infra/db/typeorm/config/orm.config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => config
    })
  ]
})
export class DBModule {}
