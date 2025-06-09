import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-google-oauth20';
import { AuthGoogleService } from 'src/auth_google/auth_google.service';
import * as passport from 'passport';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authGoogleService: AuthGoogleService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CB,
      scope: ['email', 'profile']
    });
  }

  authorizationParams() {
    return {
      prompt: 'select_account',
    };
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    console.log('Google profile:', profile);

    const { displayName, emails } = profile;

    const user = await this.authGoogleService.validateUser({
      email: emails[0].value,
      displayName: displayName,
      accountId: "google_" + profile.id
    })

    return user;
  }

}

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});