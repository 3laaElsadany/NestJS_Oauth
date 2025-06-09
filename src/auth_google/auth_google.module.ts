import { Module } from '@nestjs/common';
import { AuthGoogleService } from './auth_google.service';
import { AuthGoogleController } from './auth_google.controller';
import { PassportModule } from '@nestjs/passport';
import { GoogleStrategy } from 'src/utils/strategy/google.strategy';
import { User } from 'src/utils/models/User.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([User]), PassportModule],
  controllers: [AuthGoogleController],
  providers: [AuthGoogleService, GoogleStrategy],
  exports: [AuthGoogleService]
})
export class AuthGoogleModule { }
