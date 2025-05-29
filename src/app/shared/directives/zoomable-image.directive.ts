import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { appOptions } from '../../main/config/app.options';

@Directive({
  selector: '[clwZoomableImage]',
})
export class ZoomableImageDirective {
  private el = inject(ElementRef);

  @HostListener('document:keydown.+')
  private zoomIn(): void {
    const el = this.el.nativeElement;
    let currWidth = el.clientWidth + appOptions.PAGE_ZOOM.ZOOM_STEP;
    if (currWidth > appOptions.PAGE_ZOOM.ZOOM_MAX_WIDTH) {
      currWidth = appOptions.PAGE_ZOOM.ZOOM_MAX_WIDTH;
    }
    el.style.width = currWidth + 'px';
  }

  @HostListener('document:keydown.-')
  private zoomOut(): void {
    const el = this.el.nativeElement;
    let currWidth = el.clientWidth - appOptions.PAGE_ZOOM.ZOOM_STEP;
    if (currWidth < appOptions.PAGE_ZOOM.ZOOM_MIN_WIDTH) {
      currWidth = appOptions.PAGE_ZOOM.ZOOM_MIN_WIDTH;
    }
    el.style.width = currWidth + 'px';
  }
}
