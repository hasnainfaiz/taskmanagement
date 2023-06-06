import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'postgres',
  //   entities: [__dirname + '../**/*.entity{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true, //not recommended for production setup
};
