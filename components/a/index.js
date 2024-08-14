import { css, html, LitElement } from 'lit';

export class PfA extends LitElement {
  static properties = {
    href: { type: String },
    text: { type: String },
  };

  static styles = css`
    a {
      color: var(--raisin-black);
      display: block;
      font-size: 1.6rem;
      font-weight: 500;
      text-decoration-color: var(--verdigris);
    }
    a:visited {
      color: var(--raisin-black);
    }
  `;

  constructor() {
    super();
    this.href = '';
    this.text = '';
  }

  render() {
    return html` <a href=${this.href}>${this.text}</a> `;
  }
}
customElements.define('pf-a', PfA);
