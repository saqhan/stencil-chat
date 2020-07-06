import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-copying', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-copying></s-adam-copying>');

    const element = await page.find('s-adam-copying');
    expect(element).toHaveClass('hydrated');
  });
});
