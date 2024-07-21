import { AppComponent } from "./app.component";
import { appConfig } from "./app.config";

describe('AppComponent', () => {

  it('can mount', () => {
    cy.mount(AppComponent, appConfig);
  })
})
