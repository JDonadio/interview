import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
