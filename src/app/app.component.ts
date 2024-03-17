import { Component } from '@angular/core';
import { BreadcrumbRouterBuildService } from './components/services/breadcrums/breadcrumb-router-build.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-angular-documentation';
  constructor(
    private _breadcrumbRouterBuildService: BreadcrumbRouterBuildService
  ){
    this._breadcrumbRouterBuildService.listenRoute();    
  }
}
