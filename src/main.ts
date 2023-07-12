import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppConfigService } from './config/app/config.service';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Get app config for cors settings and starting the app.
  const appConfig: AppConfigService = app.get('AppConfigService');
  await app.listen(appConfig.port);  // <---- Notice this
}
bootstrap()