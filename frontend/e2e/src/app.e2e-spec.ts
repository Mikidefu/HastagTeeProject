import { AppPage } from './app.po';

describe('Spazio di lavoro - Progetto App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Dovrebbe dare il benvenuto', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Benvenuto nello shop!');
  });
});
