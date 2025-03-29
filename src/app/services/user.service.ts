import { Injectable } from '@angular/core';
import { Account, Databases, ID, Models } from 'appwrite';
import { account, databases } from '../../lib/appwrite';
import { Login, SignUp } from '../interfaces/form';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private account: Account;
  private databases: Databases;

  constructor() {
    this.account = account;
    this.databases = databases;
  }

  async getUser(): Promise<Models.User<Models.Preferences>> {
    return await this.account.get();
  }

  async signup(user: SignUp): Promise<Models.User<Models.Preferences>> {
    try {
      await this.account.create(ID.unique(), user.email, user.password, user.fullName);
      await this.account.createEmailPasswordSession(user.email, user.password);
      return await this.account.get();
    } catch (error: any) {
      if (error.code === 409) {
        throw new Error('A user with this email already exists.');
      }
      throw new Error(`Signup failed: ${error.message || 'Unknown error'}`);
    }
  }

  async createSession({ email, password }: Login): Promise<Models.User<Models.Preferences>> {
    await this.account.createEmailPasswordSession(email, password);
    return await this.account.get();
  }

  async logout(): Promise<boolean> {
    await this.account.deleteSession('current');
    return true;
  }
}
