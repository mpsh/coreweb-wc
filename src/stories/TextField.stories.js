import { html } from 'lit-element';
import '../components/TextField/TextField.js';

export default {
  title: 'Example/TextField'
};

export const Simple = () => html`<cw-text-field />`;
Simple.args = {
  defaultValue: 'default value'
}
