import { SampleApPage } from './app.po';

describe('sample-ap App', () => {
  let page: SampleApPage;

  beforeEach(() => {
    page = new SampleApPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
