import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import * as passport from 'passport';
import { Strategy } from 'passport-facebook';
import { AuthGoogleService } from 'src/auth_google/auth_google.service';

@Injectable()
export class FaceBookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly authGoogleService: AuthGoogleService) {
    super({
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CB,
      scope: ['email', 'public_profile']
    });
  }

  authorizationParams() {
    return {
      auth_type: 'rerequest'
    };
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    const { displayName, emails } = profile;

    console.log('Facebook profile:', profile);


    const user = await this.authGoogleService.validateUser({
      email: emails?.[0]?.value || null,
      displayName,
      accountId: "facebook_" + profile.id
    });

    return user;
  }


}

