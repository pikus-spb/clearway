import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app.config';
import { MainComponent } from './component/main.component';

bootstrapApplication(MainComponent, config)
  .catch((err) => console.error(err));
