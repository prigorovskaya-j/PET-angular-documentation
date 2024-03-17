import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';
import { BreadcrumbsService } from './breadcrumbs.service';
import { Breadcrumb } from '../../models/breadcrumbs.interface';

@Injectable()
export class BreadcrumbRouterBuildService {

  constructor(
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {}
 
  listenRoute(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => {
          const breadcrumbs = this._makeBreadcrumbs(this._router.routerState.snapshot.root.firstChild);
          this._breadcrumbsService.setBreadcrumbs(breadcrumbs);
        })
      )
      .subscribe();
  }

  private _makeBreadcrumbs(route: ActivatedRouteSnapshot | null): Breadcrumb[] {
    const breadcrumbs: Breadcrumb[] = [];
    let routeUrl: string[] = [];
    while (route) {
      routeUrl = routeUrl.concat(route.url.map((url) => url.path));
      if (route.data['breadcrumb']) {          
        const breadcrumb = {
          label: this._getLabel(route.data),
          url: '/' + routeUrl.join('/'),
        };
        route = route.firstChild;
          if(breadcrumbs.length && breadcrumbs[breadcrumbs.length-1].url===breadcrumb.url){
            continue; 
          }
        breadcrumbs.push(breadcrumb);  
      }      
    }
    this._isHomePage(breadcrumbs);
    return breadcrumbs;
  }

  private _isHomePage(breadcrumbs: Breadcrumb[]) {
    if (breadcrumbs.length === 1 && breadcrumbs[0]['url'] === '/about-project-page') {
      //breadcrumbs.pop();
    }
  }

  private _getLabel(data: Data) {
    const breadcrumb = data['breadcrumb']['title'];
    return typeof breadcrumb === 'function'
      ? breadcrumb(data)
      : breadcrumb;
  }
}
