import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-nav-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-nav-item></s-adam-nav-item>');

    const element = await page.find('s-adam-nav-item');
    expect(element).toHaveClass('hydrated');
  });
});
