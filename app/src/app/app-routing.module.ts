import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from "./example/example.component";
import {SearchTorrentsComponent} from "./components/search-torrents/search-torrents.component";

const routes: Routes = [
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: '',
    component: SearchTorrentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
