import { NgModule } from '@angular/core';  
  
// Directive  
import { CompareDirective } from '../directive/compare-directive/compare-password.directive';  
  
  
@NgModule({  
  declarations: [  
    CompareDirective  
  ],  
  exports: [  
    CompareDirective  
  ]  
})  
export class ComparePasswordModule { }  