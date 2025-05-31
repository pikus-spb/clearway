import { Routes } from '@angular/router';
import { DocumentComponent } from '../../features/document/components/document/document.component';
import { DocumentResolver } from './resolvers/document.resolver';

export const routes: Routes = [
  {
    path: 'document/:id',
    component: DocumentComponent,
    resolve: {
      doc: DocumentResolver,
    },
  },
];
