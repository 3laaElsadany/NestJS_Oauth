import { Controller, Get } from '@nestjs/common';
import { CurrentUser } from './utils/decorators/user.decorator';
import { User } from './utils/models/User.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('user')
  user(@CurrentUser() user: User) {
    return this.appService.user(user);
  }
}
