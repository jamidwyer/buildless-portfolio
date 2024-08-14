import { css, html, LitElement } from 'lit';

export class Layout extends LitElement {
  static styles = css`
    :host {
      margin: 0;
      padding: 0;
      color: var(--raisin-black);
      font-family: 'Segoe UI', Helvetica, Arial, sans-serif, 'Segoe UI Symbol';
      font-size: 16px;
    }
  `;

  render() {
    return html` <div><slot name="layout"></slot></div> `;
  }
}
customElements.define('pf-layout', Layout);
