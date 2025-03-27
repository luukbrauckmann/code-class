import type { Props } from "./Button.astro";

export class EnhancedButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  render({ ...props }: Props) {
    return (`
      <button {...props}>
        <slot></slot>
      </button>
    `);
  }
}

customElements.define('enhanced-button', EnhancedButton);
