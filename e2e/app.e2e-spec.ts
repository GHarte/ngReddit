import { NgRedditPage } from './app.po';

describe('ng-reddit App', () => {
  let page: NgRedditPage;

  beforeEach(() => {
    page = new NgRedditPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
