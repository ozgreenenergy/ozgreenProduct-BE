import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'tracNetJWT',
      password: '',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
}
export default config;