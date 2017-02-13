import { Heroes01Page } from './app.po';

describe('heroes01 App', function() {
  let page: Heroes01Page;

  beforeEach(() => {
    page = new Heroes01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
