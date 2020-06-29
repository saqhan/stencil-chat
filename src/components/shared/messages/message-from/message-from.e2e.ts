import { newE2EPage } from '@stencil/core/testing';

describe('message-from', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<message-from></message-from>');

    const element = await page.find('message-from');
    expect(element).toHaveClass('hydrated');
  });
});
