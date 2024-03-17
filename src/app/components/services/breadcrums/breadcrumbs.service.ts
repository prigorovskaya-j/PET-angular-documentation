import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb } from '../../models/breadcrumbs.interface';

@Injectable()
export class BreadcrumbsService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  get breadcrumbs(): Breadcrumb[] {
    return this._breadcrumbs$.getValue();
  }

  setBreadcrumbs(breadcrumbs: Breadcrumb[]): void {
    this._breadcrumbs$.next(breadcrumbs);
  }

  addBreadcrumb(breadcrumb: Breadcrumb): void {
    const newBreadcrumbs: Breadcrumb[] = this.breadcrumbs;
    newBreadcrumbs.push(breadcrumb);
    this._breadcrumbs$.next(newBreadcrumbs);
  }

  removeBreadcrumb(index: number): void {
    if (index > -1) {
      this.breadcrumbs.splice(index, 1);
    }
    this._breadcrumbs$.next(this.breadcrumbs);
  }

  updateBreadcrumb(breadcrumb: Breadcrumb, index: number): void {
    this._breadcrumbs$.forEach((bread)=>{bread[index] = breadcrumb});    
  }
}
