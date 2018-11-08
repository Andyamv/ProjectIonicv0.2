import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreacionUsuarioPage } from './creacion-usuario';

@NgModule({
  declarations: [
    CreacionUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CreacionUsuarioPage),
  ],
})
export class CreacionUsuarioPageModule {}
