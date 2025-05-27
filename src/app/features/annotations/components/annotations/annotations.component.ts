import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'clw-annotations',
  imports: [JsonPipe],
  templateUrl: './annotations.component.html',
  styleUrl: './annotations.component.scss',
})
export class AnnotationsComponent {
  private route = inject(ActivatedRoute);
  protected document = toSignal(this.route.data.pipe(map(data => data['document'])));
}
