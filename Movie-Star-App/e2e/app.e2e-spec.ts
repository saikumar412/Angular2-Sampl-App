import { MovieStarAppPage } from './app.po';

describe('movie-star-app App', () => {
  let page: MovieStarAppPage;

  beforeEach(() => {
    page = new MovieStarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
