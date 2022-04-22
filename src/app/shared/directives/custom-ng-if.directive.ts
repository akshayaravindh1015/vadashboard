import {
  Directive,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngVisIf]',
})
export class CustomNgIfDirective {
  @Input()
  set ngVisIf(show: boolean) {
    if (show) {
      this.renderer.addClass(
        this.templateRef.elementRef.nativeElement.previousSibling,
        'ngVisIf-hidden'
      );
    } else {
      this.renderer.removeClass(
        this.templateRef.elementRef.nativeElement.previousSibling,
        'ngVisIf-hidden'
      );
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private container: ViewContainerRef
  ) {
    this.container.createEmbeddedView(this.templateRef);
  }
}
/*
  .ngVisIf-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
*/
