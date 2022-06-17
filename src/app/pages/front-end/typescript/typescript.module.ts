import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeScriptPageRoutingModule } from './typescript-routing.module';

import { TypeScriptPage } from './typescript.page';
import { QuestionsComponent } from 'src/app/components/questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeScriptPageRoutingModule
  ],
  declarations: [
    TypeScriptPage,
    QuestionsComponent,
  ]
})
export class TypeScriptPageModule {}
