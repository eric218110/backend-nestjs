import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from '@modules/user/user.module'

async function bootstrap() {
  const SERVER_PORT =
    process.env.SERVER_PORT !== undefined ? process.env.SERVER_PORT : 3000
  const app = await NestFactory.create(AppModule)
  await app
    .listen(SERVER_PORT)
    .then(() =>
      Logger.log(`Server running in port ${SERVER_PORT}`, 'ServerApplication')
    )
}

bootstrap()
