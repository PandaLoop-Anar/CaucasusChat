import { LitElement, html, css } from "lit-element";
import { RestClient } from "../common/rest-client.js";

class ChatMessageForm extends LitElement {
  static get is() {
    return "chat-message-form";
  }

  static get properties() {
    return {
      tooltip: {
        type: String,
        reflect: true,
      },
      firstName: {
        type: String,
        reflect: true,
        attribute: "first-name",
      },
      lastName: {
        type: String,
        reflect: true,
        attribute: "last-name",
      },
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .form {
        display: grid;
        grid-gap: 20px;
        margin-top: 20px;
      }
    `;
  }

  render() {
    return html`
      <span>${this.tooltip}</span>
      <div class="form">
        <div>
          <label for="firstName">First name *</label>
          <input
            type="text"
            .value="${this.firstName}"
            @input="${this.setFirstName}"
          />
        </div>
        <div>
          <label for="lastName">Last name *</label>
          <input
            type="text"
            .value="${this.lastName}"
            @input="${this.setLastName}"
          />
        </div>
        <div>Full name: ${this.firstName} ${this.lastName}</div>
        <div>
          <button type="submit" @click="${this.registerUser}" id="submit">
            Sign up
          </button>
        </div>
      </div>
    `;
  }
  setFirstName(event) {
    // console.log(event);
    this.firstName = event.target.value;
    console.log("first name:", this.firstName);
  }
  setLastName(event) {
    this.lastName = event.target.value;
    console.log("last name:", this.lastName);
  }

  registerUser(event) {
    const target = event.currentTarget;
    target.disabled = true;

    const user = {
      fitstName: this.firstName,
      lastName: this.lastName,
    };

    RestClient.call("/api/client/registerUser", user)
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
      .finally(() => {
        () => (target.disabled = false);
      });
  }

  constructor() {
    super();
    this.tooltip = `Hello world!`;
    this.firstName = "";
    this.lastName = "";
  }
}

customElements.define(ChatMessageForm.is, ChatMessageForm);
