import { LitElement, html } from 'lit-element';

class CwTextField extends LitElement {
  render() {
    return html`
      <input type="text" />
    `;
  }
}

window.customElements.define('cw-text-field', CwTextField);
