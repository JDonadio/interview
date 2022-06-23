import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'front-end/angular',
    loadChildren: () => import('./pages/front-end/angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'front-end/css',
    loadChildren: () => import('./pages/front-end/css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'front-end/typescript',
    loadChildren: () => import('./pages/front-end/typescript/typescript.module').then( m => m.TypeScriptPageModule)
  },
  {
    path: 'git',
    loadChildren: () => import('./pages/git/git.module').then( m => m.GitPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
