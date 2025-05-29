import { bootstrapApplication } from '@angular/platform-browser';
import { MainComponent } from './component/main.component';
import { config } from './config/app.config';

bootstrapApplication(MainComponent, config).catch(err => console.error(err));
