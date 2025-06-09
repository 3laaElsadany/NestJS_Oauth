import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function OauthGuard(strategy: string) {
  @Injectable()
  class DynamicOauthGuard extends AuthGuard(strategy) {
    async canActivate(context: ExecutionContext) {
      const activate = (await super.canActivate(context)) as boolean;
      const request = context.switchToHttp().getRequest();
      await super.logIn(request);
      return activate;
    }
  }
  return DynamicOauthGuard;
}