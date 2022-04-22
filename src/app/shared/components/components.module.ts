import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCustNgIfComponent } from './test-cust-ng-if/test-cust-ng-if.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [TestCustNgIfComponent],
  imports: [CommonModule, DirectivesModule],
  exports: [TestCustNgIfComponent],
})
export class ComponentsModule {}
