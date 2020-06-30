import { newE2EPage } from '@stencil/core/testing';

describe('message-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<message-img></message-img>');

    const element = await page.find('message-img');
    expect(element).toHaveClass('hydrated');
  });
});
