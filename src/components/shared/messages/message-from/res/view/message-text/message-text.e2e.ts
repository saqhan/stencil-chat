import { newE2EPage } from '@stencil/core/testing';

describe('message-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<message-text></message-text>');

    const element = await page.find('message-text');
    expect(element).toHaveClass('hydrated');
  });
});
