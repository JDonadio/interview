import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitPageRoutingModule } from './git-routing.module';

import { GitPage } from './git.page';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitPageRoutingModule,
  ],
  declarations: [
    GitPage,
    QuestionsComponent,
  ]
})
export class GitPageModule {}
