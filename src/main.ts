import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';
import {bootstrapApplication, provideProtractorTestingSupport} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routeConfig),
        provideHttpClient(withFetch()),
        provideAnimations(),provideProtractorTestingSupport(),
    ]
}).catch(err => console.error(err));