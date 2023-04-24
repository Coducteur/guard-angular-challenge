import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private role: any = 'admin';

  constructor() {}

  login(): Observable<boolean> {
    return of(true).pipe(delay(3000));
  }

  getRole(): any {
    return this.role;
  }
}
