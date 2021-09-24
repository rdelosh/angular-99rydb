import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LdcPortalComponent } from './ldc-portal.component';
import { PortalModule } from '@angular/cdk/portal';
@NgModule({
  imports: [
    CommonModule,
    PortalModule,
  ],
  declarations: [LdcPortalComponent],
  exports: [LdcPortalComponent],

})
export class LdcPortalModule { }
