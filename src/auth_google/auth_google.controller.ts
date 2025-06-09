import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGoogleService } from './auth_google.service';
import { OauthGuard } from 'src/utils/guards/Oauth.guard';

@Controller('google')
export class AuthGoogleController {
  constructor(private readonly authGoogleService: AuthGoogleService) { }

  @UseGuards(OauthGuard('google'))
  @Get()
  googleLogin() {

  }

  @UseGuards(OauthGuard('google'))
  @Get('cb')
  googleRedirect() {
    return this.authGoogleService.googleRedirect();
  }

}