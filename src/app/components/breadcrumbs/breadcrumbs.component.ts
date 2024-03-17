import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Breadcrumb } from "src/app/components/models/breadcrumbs.interface";
import { BreadcrumbsService } from "src/app/components/services/breadcrums/breadcrumbs.service";
@Inject
@Component({
  selector: 'pet-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbComponent implements OnInit{
  constructor(
    private readonly breadcrumbService: BreadcrumbsService){
      this.breadcrumbs$ = this.breadcrumbService.breadcrumbs$;
  }
  ngOnInit(): void {}
  breadcrumbs$: Observable<Breadcrumb[]>;

}