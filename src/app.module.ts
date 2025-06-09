import { Module } from '@nestjs/common';
import { AuthGoogleModule } from './auth_google/auth_google.module';
import { AuthFacebookModule } from './auth_facebook/auth_facebook.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './utils/models/User.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  SequelizeModule.forRoot({
    dialect: process.env.DB_DIALECT as 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    models: [User],
    autoLoadModels: true,
    synchronize: true
  }), AuthGoogleModule, AuthFacebookModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }