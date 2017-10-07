import { PostEventerPage } from './app.po';

describe('post-eventer App', () => {
  let page: PostEventerPage;

  beforeEach(() => {
    page = new PostEventerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
