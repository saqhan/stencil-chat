import { newSpecPage } from '@stencil/core/testing';
import { SAdamSearchContact } from './s-adam-search-contact';

describe('s-adam-search-contact', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SAdamSearchContact],
      html: `<s-adam-search-contact></s-adam-search-contact>`,
    });
    expect(page.root).toEqualHtml(`
      <s-adam-search-contact>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </s-adam-search-contact>
    `);
  });
});
