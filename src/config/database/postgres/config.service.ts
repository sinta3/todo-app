import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

/**
 * Service dealing with db config based operations.
 * @class
 */
@Injectable()
export class DbConfigService {
    constructor(private configService: ConfigService) {}

    get database_host(): string {
        return this.configService.get<string>('db.database_host');
    }

    get database_name(): string {
        return this.configService.get<string>('db.database_name')
    }

    get database_user(): string {
        return this.configService.get<string>('db.database_user')
    }

    get database_password(): number {
        return Number(this.configService.get<number>('db.database_password'))
    }

    get database_port(): number {
        return Number(this.configService.get<number>('db.database_port'))
    }
    
}