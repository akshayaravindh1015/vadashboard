import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNgIfDirective } from './custom-ng-if.directive';

@NgModule({
  declarations: [CustomNgIfDirective],
  imports: [CommonModule],
  exports: [CustomNgIfDirective],
})
export class DirectivesModule {}
