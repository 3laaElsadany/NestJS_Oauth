import { Injectable } from '@nestjs/common';
import { User } from './utils/models/User.model';

@Injectable()
export class AppService {
  user(user: User) {
    console.log(user);
    if (user) {
      return {
        message: 'Authenticated', user
      };
    } else {
      return {
        message: 'Not Authenticated'
      };
    }
  }
}
