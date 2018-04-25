import { ClientVVCPage } from './app.po';

describe('client-vvc App', () => {
  let page: ClientVVCPage;

  beforeEach(() => {
    page = new ClientVVCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
