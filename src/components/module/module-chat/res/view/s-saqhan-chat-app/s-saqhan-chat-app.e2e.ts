import { newE2EPage } from '@stencil/core/testing';

describe('chat-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chat-app></chat-app>');

    const element = await page.find('chat-app');
    expect(element).toHaveClass('hydrated');
  });
});
