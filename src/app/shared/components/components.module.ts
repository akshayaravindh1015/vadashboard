import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCustNgIfComponent } from './test-cust-ng-if/test-cust-ng-if.component';
import { DirectivesModule } from '../directives/directives.module';
import { PdfConverterComponent } from './pdf-converter/pdf-converter.component';

@NgModule({
  declarations: [TestCustNgIfComponent, PdfConverterComponent],
  imports: [CommonModule, DirectivesModule],
  exports: [TestCustNgIfComponent, PdfConverterComponent],
})
export class ComponentsModule {}
