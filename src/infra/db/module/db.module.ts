import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { resolve } from 'path/posix'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: resolve('database', 'db.sqlite'),
        synchronize: true,
        migrationsRun: true,
        logging: true,
        entities: ['**/*.entity{.ts,.js}'],
        autoLoadEntities: true
      })
    })
  ]
})
export class DBModule {}
