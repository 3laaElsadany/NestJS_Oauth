import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @AllowNull(true)
  @Column
  email: string;

  @Column
  displayName: string;

  @Column
  accountId: string;
}