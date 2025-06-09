import { Module } from '@nestjs/common';
import { AuthFacebookService } from './auth_facebook.service';
import { AuthFacebookController } from './auth_facebook.controller';
import { PassportModule } from '@nestjs/passport';
import { FaceBookStrategy } from 'src/utils/strategy/facebook.strategy';
import { AuthGoogleModule } from 'src/auth_google/auth_google.module';

@Module({
  imports: [PassportModule, AuthGoogleModule],
  controllers: [AuthFacebookController],
  providers: [AuthFacebookService, FaceBookStrategy],
})
export class AuthFacebookModule { }
