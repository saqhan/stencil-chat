import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-personal-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-personal-header></s-adam-personal-header>');

    const element = await page.find('s-adam-personal-header');
    expect(element).toHaveClass('hydrated');
  });
});
