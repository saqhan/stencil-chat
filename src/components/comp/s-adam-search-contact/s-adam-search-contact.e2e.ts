import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-search-contact', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-search-contact></s-adam-search-contact>');

    const element = await page.find('s-adam-search-contact');
    expect(element).toHaveClass('hydrated');
  });
});
