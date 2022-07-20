import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { NameService } from './name.service';

@Pipe({
  name: 'newName',
})
export class NewNamePipe implements PipeTransform {
  constructor(private readonly nameService: NameService) {}

  transform(value: string): Observable<string> {
    this.nameService.setName(value);
    return this.nameService.getName();
  }
}
