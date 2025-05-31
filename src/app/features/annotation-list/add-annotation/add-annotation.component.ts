import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'clw-add-annotation',
  imports: [ReactiveFormsModule],
  templateUrl: './add-annotation.component.html',
  styleUrl: './add-annotation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAnnotationComponent {
  public annotationAdd = output<string>();
  private fb = inject(FormBuilder);
  protected form = this.fb.group({
    annotation: ['', Validators.required],
  });

  protected addAnnotation(): void {
    if (this.form.invalid) {
      return;
    }
    this.annotationAdd.emit(this.form.value.annotation!);
    this.form.reset();
  }
}
