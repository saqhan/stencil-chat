import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-profile></s-adam-profile>');

    const element = await page.find('s-adam-profile');
    expect(element).toHaveClass('hydrated');
  });
});
