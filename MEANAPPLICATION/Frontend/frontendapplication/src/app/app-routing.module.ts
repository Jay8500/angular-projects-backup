import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ 
     { path : 'homepage', loadChildren: () => import(`src/appFeature/features-module/home-landingpage/home-landingpage.component`).then( m => m.HomeLandingpageComponent) },
     { path :  'dashboardlist', loadChildren : () => import('src/appFeature/features-module/dash-boards-list/dash-boards-list.component').then( m => m.DashBoardsListComponent)},
     { path :  'chatlist', loadChildren : () => import('src/appFeature/features-module/chat-lists/chat-lists.component').then( m => m.ChatListsComponent)},
     { path : 'contactlist', loadChildren:() => import('src/appFeature/features-module/contact-page/contact-page.component').then(m => m.ContactPageComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
