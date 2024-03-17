import { NgModule } from "@angular/core";
import { BreadcrumbComponent } from "./breadcrumbs.component";
import { RouterModule } from "@angular/router";
import { BreadcrumbsService } from "../services/breadcrums/breadcrumbs.service";
import { BreadcrumbRouterBuildService } from "../services/breadcrums/breadcrumb-router-build.service";

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [RouterModule],
  exports: [BreadcrumbComponent],
  providers: [BreadcrumbsService, BreadcrumbRouterBuildService]
})
export class BreadcrumsModule{}