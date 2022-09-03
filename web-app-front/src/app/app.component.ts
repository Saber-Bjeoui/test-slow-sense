import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  shapes$ = this.httpService.getShapes() as Observable<any>;

  constructor(private httpService: HttpService) {}
}
