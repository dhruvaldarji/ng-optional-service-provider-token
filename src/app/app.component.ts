import { Component, VERSION } from '@angular/core';
import { NameService } from './name.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NameService],
})
export class AppComponent {
  name = this.nameService.getName();

  constructor(private readonly nameService: NameService) {}
}
