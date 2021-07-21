import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { resolve } from 'path'

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: resolve('database', 'db.sqlite'),
  synchronize: true,
  migrationsRun: true,
  logging: true,
  entities: [resolve(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
  migrations: [resolve(__dirname, '..', 'migrations', '*.migration{.ts,.js}')],
  autoLoadEntities: true
}

module.exports = options
