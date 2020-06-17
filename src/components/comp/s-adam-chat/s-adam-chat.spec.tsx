import { newSpecPage } from '@stencil/core/testing';
import { SAdamChat } from './s-adam-chat';

describe('s-adam-chat', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAdamChat],
      html: `<s-adam-chat></s-adam-chat>`,
    });
    expect(page.root).toEqualHtml(`
      <s-adam-chat>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-adam-chat>
    `);
  });
});
