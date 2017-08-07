import { AppMusicPage } from './app.po';

describe('app-music App', () => {
  let page: AppMusicPage;

  beforeEach(() => {
    page = new AppMusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
