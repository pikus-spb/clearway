import { Routes } from '@angular/router';
import { AnnotationsComponent } from '../../features/annotations/components/annotations/annotations.component';
import { DocumentResolver } from './resolvers/document.resolver';

export const routes: Routes = [
  {
    path: 'document/:id',
    component: AnnotationsComponent,
    resolve: {
      document: DocumentResolver,
    },
  },
];
