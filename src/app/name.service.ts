import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NAME } from './name';

@Injectable()
export class NameService {
  private name = new BehaviorSubject<string>('');

  constructor(@Inject(NAME) @Optional() defaultName: string) {
    if (defaultName) {
      this.name.next(defaultName);
    }
  }

  forChild(name: string) {
    this.name.next(name);
  }

  getName(): Observable<string> {
    return this.name.asObservable();
  }

  setName(newName: string): void {
    this.name.next(newName);
  }
}
