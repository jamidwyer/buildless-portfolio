import { css, html, LitElement } from 'lit';

export class PfImg extends LitElement {
  static properties = {
    src:  { type: String },
  };

  static styles = css`
    img {
      display: flex;
      height: 400px;
      object-fit: cover;
      width: 100%;
    }
  `;

  constructor() {
    super();
    this.href = '';
    this.text = '';
  }
  text
  render() {
    return html`
    <img decoding="async" loading="lazy" src=${this.src} alt=${this.alt} srcSet="${this.src} 750w, ${this.src} 978w" />
    `;
  }
}
customElements.define('pf-img', PfImg);