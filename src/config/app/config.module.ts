import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service'; 
import { ConfigModule, ConfigService } from '@nestjs/config/dist';

/**
 * Import and provide app configuration related classes
 * 
 * @module
 */
@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            validationSchema: Joi.object({
                APP_NAME: Joi.string().default('Todo App'),
                APP_ENV: Joi.string().valid('development', 'production', 'test', 'provision')
                .default('development'),
                APP_URL: Joi.string().default('http://localhost:9091'),
                APP_PORT: Joi.number().default(9091),
            })
        })
    ],
    providers:[ConfigService,AppConfigService],
    exports:[ConfigService,AppConfigService]
})
export class AppConfigModule {}