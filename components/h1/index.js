import { css, html, LitElement } from 'lit';

export class PfH1 extends LitElement {
  static properties = {
    text: { type: String },
  };

  static styles = css`
    h1 {
      color: var(--raisin-black);
      display: block;
      font-weight: 400;
      font-size: 3.2rem;
      line-height: 1.2;
      padding: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.text = '';
  }

  render() {
    return html` <h1>${this.text}</h1> `;
  }
}
customElements.define('pf-h1', PfH1);
