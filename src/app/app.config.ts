import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { LIGHTBOX_CONFIG, LightboxConfig } from 'ng-gallery/lightbox';
import { routes } from './app.routes';
import { environment } from './environments/environment';
import { TranslationService } from './translations/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideTranslateService({
      defaultLanguage: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
      },
    }),
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: false,
        imageSize: 'contain',
        thumbPosition: 'bottom',
        thumbs: true,
        thumbImageSize: `contain`,
        thumbHeight: 200,
        thumbAutosize: true,
        bullets: true,
      } as GalleryConfig,
    },
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        exitAnimationTime: 200,
      } as LightboxConfig,
    },
    provideAnimationsAsync(),
  ],
};
