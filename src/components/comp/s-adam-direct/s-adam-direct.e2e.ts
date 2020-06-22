import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-direct', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-direct></s-adam-direct>');

    const element = await page.find('s-adam-direct');
    expect(element).toHaveClass('hydrated');
  });
});
