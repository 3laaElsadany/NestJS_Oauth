import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthFacebookService {
  faceBookRedirect() {
    return { message: 'OK' };
  }
}
