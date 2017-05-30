import { TAASPage } from './app.po';

describe('taas App', () => {
  let page: TAASPage;

  beforeEach(() => {
    page = new TAASPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
