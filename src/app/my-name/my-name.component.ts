import { Component } from '@angular/core';
import { NAME } from '../name';
import { NameService } from '../name.service';

@Component({
  selector: 'app-my-name',
  template: 'My name is {{ name | async }}!',
  providers: [NameService, { provide: NAME, useValue: 'Slim Shady' }],
})
export class MyNameComponent {
  name = this.nameService.getName();

  constructor(private readonly nameService: NameService) {}
}
