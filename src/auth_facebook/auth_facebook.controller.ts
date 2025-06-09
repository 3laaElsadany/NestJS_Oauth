import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthFacebookService } from './auth_facebook.service';
import { OauthGuard } from 'src/utils/guards/Oauth.guard';

@Controller('facebook')
export class AuthFacebookController {
  constructor(private readonly authFacebookService: AuthFacebookService) { }

  @UseGuards(OauthGuard('facebook'))
  @Get()
  faceBookLogin() {

  }

  @UseGuards(OauthGuard('facebook'))
  @Get('cb')
  faceBookRedirect() {
    return this.authFacebookService.faceBookRedirect();
  }

}
