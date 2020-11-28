import { html } from 'lit-element';
import '../../coreweb-wc';

export default {
  title: 'Example/CorewebWc'
};

export const Simple = html`<coreweb-wc></coreweb-wc>`;
Simple.args = {
  color: 'red'
};
