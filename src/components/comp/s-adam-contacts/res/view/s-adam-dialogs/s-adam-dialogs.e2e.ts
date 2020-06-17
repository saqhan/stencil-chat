import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-dialogs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-dialogs></s-adam-dialogs>');

    const element = await page.find('s-adam-dialogs');
    expect(element).toHaveClass('hydrated');
  });
});
