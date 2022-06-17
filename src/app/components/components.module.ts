import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionsComponent } from 'src/app/components/questions/questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    QuestionsComponent,
  ],
  exports: [
    QuestionsComponent,
  ]
})
export class ComponentsModule {}
