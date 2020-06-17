import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-chat></s-adam-chat>');

    const element = await page.find('s-adam-chat');
    expect(element).toHaveClass('hydrated');
  });
});
