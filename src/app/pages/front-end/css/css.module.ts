import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CssPageRoutingModule } from './css-routing.module';

import { CssPage } from './css.page';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CssPageRoutingModule
  ],
  declarations: [
    CssPage,
    QuestionsComponent,
  ]
})
export class CssPageModule {}
