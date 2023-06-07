import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDS_HOSTNAME || dbConfig.host,
  port: process.env.RDS_PORT || dbConfig.port,
  username: process.env.RDS_USERNAME || dbConfig.username,
  database: process.env.RDS_DB_NAME || dbConfig.database,
  //   entities: [__dirname + '../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize, //not recommended for production setup
};
