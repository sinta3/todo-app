import { DatabaseType } from 'typeorm'
import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { DbConfigModule } from '../../../config/database/postgres/config.module'
import { DbConfigService } from 'src/config/database/postgres/config.service'

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [DbConfigModule],
            useFactory: async (dbConfigService: DbConfigService) => ({
                type:'postgres' as DatabaseType,
                host:dbConfigService.database_host,
                port: dbConfigService.database_port,
                username: dbConfigService.database_user,
                password: dbConfigService.database_password,
                database: dbConfigService.database_name,
                entities: []
            }),
            inject: [DbConfigService],
        } as TypeOrmModuleAsyncOptions ),
    ],
})
export class PostgresDatabaseProviderModule {}