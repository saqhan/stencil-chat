import { newSpecPage } from '@stencil/core/testing';
import { UserStatus } from './user-status';

describe('user-status', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UserStatus],
      html: `<user-status></user-status>`,
    });
    expect(page.root).toEqualHtml(`
      <user-status>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </user-status>
    `);
  });
});
