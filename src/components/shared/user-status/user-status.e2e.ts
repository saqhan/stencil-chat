import { newE2EPage } from '@stencil/core/testing';

describe('user-status', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<user-status></user-status>');

    const element = await page.find('user-status');
    expect(element).toHaveClass('hydrated');
  });
});
