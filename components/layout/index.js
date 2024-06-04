import { css, html, LitElement } from 'lit';

export class Layout extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    :host {
      margin: 0;
      padding: 0;
      color: var(--raisin-black);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  }
`;

  render() {
    return html`
    <div><slot name="layout"></slot></div>
    `;
  }
}
customElements.define('pf-layout', Layout);