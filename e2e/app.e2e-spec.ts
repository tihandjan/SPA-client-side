import { SPAClientSidePage } from './app.po';

describe('spa-client-side App', function() {
  let page: SPAClientSidePage;

  beforeEach(() => {
    page = new SPAClientSidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
