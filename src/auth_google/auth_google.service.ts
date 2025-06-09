import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/utils/models/User.model';
import { Details, FindOne } from 'src/utils/types';

@Injectable()
export class AuthGoogleService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async validateUser(details: Details) {
    const user = await this.findOne({ key: "accountId", value: details.accountId })
    if (user) return user;
    const newUser = await this.userModel.create({ ...details });
    return newUser;
  }

  googleRedirect() {
    return { message: 'OK' };
  }

  async findOne(data: FindOne) {
    return await this.userModel.findOne({
      where: {
        [data.key]: data.value
      }
    });
  }
}