import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeScriptPageRoutingModule } from './typescript-routing.module';

import { TypeScriptPage } from './typescript.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeScriptPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    TypeScriptPage,
  ]
})
export class TypeScriptPageModule {}
