import { Directive, ElementRef, HostListener, inject, OnInit } from '@angular/core';

// Better to place into environments or global app config
const DEFAULT_IMAGE_WIDTH = 400;
const ZOOM_STEP = 100;

@Directive({
  selector: '[clwZoomableImage]',
})
export class ZoomableImageDirective implements OnInit {
  private el = inject(ElementRef);

  public ngOnInit(): void {
    this.el.nativeElement.style.width = DEFAULT_IMAGE_WIDTH + 'px';
  }

  @HostListener('document:keydown.+')
  private zoomIn(): void {
    const el = this.el.nativeElement;
    const currWidth = el.clientWidth + ZOOM_STEP;
    el.style.width = currWidth + 'px';
  }

  @HostListener('document:keydown.-')
  private zoomOut(): void {
    const el = this.el.nativeElement;
    const currWidth = el.clientWidth - ZOOM_STEP;
    el.style.width = currWidth + 'px';
  }
}
