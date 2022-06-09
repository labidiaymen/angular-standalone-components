import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  userProfile() {
    return { name: 'Aymen' };
  }
}
