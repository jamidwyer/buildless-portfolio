import { css, html, LitElement } from 'lit';

import '../figure/index.js';
import '../img/index.js';
import '../a/index.js';

export class Ul extends LitElement {
  static properties = {
    src: { type: String },
    items: { type: Object },
  };

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-block-start: 0;
      padding-inline-start: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    li {
      flex: 1 1 0px;
      min-width: 400px;
      max-width: 840px;
    }
    figure {
      padding: 0;
      margin: 0;
      width: 100%;
    }
    figcaption {
      padding: 1rem;
    }
    p {
      color: rgb(117, 117, 117);
    }
    @media screen and (max-width: 820px) {
      li {
        width: 100%;
      }
    }
}
  `;

  render() {
    if (!this.items) {
      return html`<slot name="loading">Loading...</slot>`;
    }
    // Check if items are not empty
    if (this.items.length === 0) {
      return html`<slot name="empty">No Items Found</slot>`;
    }
    return html`
      <ul>
        ${this.items.map(
          item =>
            html` <li>
              <figure>
                <picture>
                  <source srcset="${item.image} 410w" sizes="100vw" />
                  <pf-img
                    sizes="100vw"
                    decoding="async"
                    loading="lazy"
                    src=${item.image}
                    srcSet="${item.image} 410w"
                    alt=${item.title}
                  >
                  </pf-img>
                </picture>
                <figcaption>
                  <pf-a href=${item.url} text=${item.title}></pf-a>
                  <p>${item.copy}</p>
                </figcaption>
              </figure>
            </li>`,
        )}
      </ul>
    `;
  }

  async firstUpdated() {
    await this.fetchData();
  }

  async fetchData() {
    const data = await fetch(this.src).then(res => res.json());
    this.items = data.gallery ?? [];
    this.requestUpdate();
  }
}
customElements.define('pf-ul', Ul);
