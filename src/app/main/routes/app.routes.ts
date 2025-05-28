import { Routes } from '@angular/router';
import { DocumentAnnotationsComponent } from '../../features/document-annotations/components/document-annotations/document-annotations.component';
import { DocumentResolver } from './resolvers/document.resolver';

export const routes: Routes = [
  {
    path: 'document/:id',
    component: DocumentAnnotationsComponent,
    resolve: {
      doc: DocumentResolver,
    },
  },
];
