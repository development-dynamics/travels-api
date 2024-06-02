import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as process from 'process'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(
    session({
      secret: 'super_secured',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: +3600000 },
    }),
  )

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
