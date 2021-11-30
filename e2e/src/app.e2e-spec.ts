import { AppPage } from './app.po';
import { by, element} from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toContain('Tab 1');
  });

  it("Msg Inicio PoKe", ()=>{
    expect(element(by.css(".end ion-avatar")));
  });
});
