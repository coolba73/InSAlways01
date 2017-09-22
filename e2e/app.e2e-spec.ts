import { InSAlways01Page } from './app.po';

describe('in-salways01 App', () => {
  let page: InSAlways01Page;

  beforeEach(() => {
    page = new InSAlways01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
