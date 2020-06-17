import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-navigate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-navigate></s-adam-navigate>');

    const element = await page.find('s-adam-navigate');
    expect(element).toHaveClass('hydrated');
  });
});
