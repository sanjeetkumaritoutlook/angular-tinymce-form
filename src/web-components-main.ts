import { enableProdMode, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WebComponentsModule } from './web-components.module';
import { FormOneComponent } from './app/web-components/form-one/form-one.component';
import { FormTwoComponent } from './app/web-components/form-two/form-two.component';
import  {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(WebComponentsModule)
  .then((moduleRef) => {
    const injector = moduleRef.injector;

    // Register Web Components
    const formOneElement = createCustomElement(FormOneComponent, { injector });
    customElements.define('web-component-template', formOneElement);

    const formTwoElement = createCustomElement(FormTwoComponent, { injector });
    customElements.define('web-component-reactive', formTwoElement);
  })
  .catch((err) => console.error(err));