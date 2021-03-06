import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngularPageRoutingModule } from './angular-routing.module';

import { AngularPage } from './angular.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngularPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    AngularPage,
  ]
})
export class AngularPageModule {}
