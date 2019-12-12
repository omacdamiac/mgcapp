import { MgcamapPage } from './app.po';

describe('mgcamap App', function() {
  let page: MgcamapPage;

  beforeEach(() => {
    page = new MgcamapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
