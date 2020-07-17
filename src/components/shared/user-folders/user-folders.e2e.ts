import { newE2EPage } from '@stencil/core/testing';

describe('user-folders', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-folders></user-folders>');

    const element = await page.find('user-folders');
    expect(element).toHaveClass('hydrated');
  });
});
