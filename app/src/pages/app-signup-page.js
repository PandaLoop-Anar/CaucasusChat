import { LitElement, html, css } from "lit-element";
import "../components/app-registration-form.js";
import "../components/app-user-list.js";

class AppSignupPage extends LitElement {
  static get is() {
    return "app-signup-page";
  }

  static get properties() {
    return {
      tooltip: {
        type: String,
        reflect: true,
      },
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .sign-up_section {
        background-color: snow;
        padding: 15px;
      }
      .users-info_section {
        margin: 40px 0;
        padding: 10px 0;
        background-color: snow;
        min-height: 300px;
      }
    `;
  }

  render() {
    return html`
      <div
        @app-edit-user="${this.editUser}"
        @app-call-user-list="${this.callUserList}"
      >
        <section class="sign-up_section">
          <app-registration-form id="form"></app-registration-form>
        </section>
        <section class="users-info_section">
          <app-user-list id="userList"></app-user-list>
        </section>
      </div>
    `;
  }

  editUser(event) {
    console.log(event);
    const user = event.detail;
    const form = this.shadowRoot.getElementById("form");
    form.setUserData(user);
  }

  callUserList(event) {
    const user = event.detail;
    const list = this.shadowRoot.getElementById("userList");
    list.callUserList(user);
  }

  constructor() {
    super();
    this.tooltip = `Sign up page`;
  }
}

customElements.define(AppSignupPage.is, AppSignupPage);
