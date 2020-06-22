import { newE2EPage } from '@stencil/core/testing';

describe('s-adam-no-chat', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<s-adam-no-chat></s-adam-no-chat>');

    const element = await page.find('s-adam-no-chat');
    expect(element).toHaveClass('hydrated');
  });
});
