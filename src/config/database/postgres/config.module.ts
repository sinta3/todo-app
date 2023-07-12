import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { DbConfigService } from './config.service'; 
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
                DATABASE_HOST: Joi.string(),
                DATABASE_NAME: Joi.string(),
                DATABASE_USER: Joi.string(),
                DATABASE_PORT: Joi.number(),
            })
        })
    ],
    providers:[ConfigService,DbConfigService],
    exports:[ConfigService,DbConfigService]
})
export class DbConfigModule {}