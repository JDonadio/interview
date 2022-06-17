import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitPageRoutingModule } from './git-routing.module';

import { GitPage } from './git.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    GitPage,
  ]
})
export class GitPageModule {}
