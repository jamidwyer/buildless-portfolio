import { css, html, LitElement } from 'lit';

export class PfFigure extends LitElement {
  static properties = {
    item: { type: Object },
  };

  constructor() {
    super();
  }

  static styles = css`
    :host {
      color: var(--raisin-black);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      margin: 0;
      padding: 0;
    }
  `;

  render() {
    return html`
      <figure>
        <picture>
          <source
            srcset="/images/discogs.png 750w, /images/discogs.png 978w"
            sizes="100vw"
          />
          <slot name="img"></slot>
          <pf-img src="/images/discogs.png"></pf-img>Layout
        </picture>
        <figcaption>
          <slot name="link"></slot>
          <p class="sc-ifAKCX hxOZcZ">
            Ported legacy frontend code to shared React component library.
          </p>
        </figcaption>
      </figure>
    `;
  }
}
customElements.define('pf-figure', PfFigure);
