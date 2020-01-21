import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Config service
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /**
   * bgVar
   */
  public bgVar = new Subject<string>();
  /**
   * Observable
   */
  public bgVar$ = this.bgVar.asObservable();
  /**
   * Update background
   * @param newUrl url to update
   */
  public updatebgUrlSubject(newUrl: string) {
    this.bgVar.next(newUrl);
  }
}
