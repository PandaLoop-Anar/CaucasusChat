import { LitElement, html, css } from "lit-element";
import { RestClient } from "../common/rest-client.js";

class AppSigninForm extends LitElement {
  static get is() {
    return "app-signin-form";
  }

  static get properties() {
    return {
      tooltip: {
        type: String,
        reflect: true,
      },
      email: { type: String },
      pass: { type: String },
      users: { type: Array },
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: row;
        width: max-content;
        width: 300px;
        text-align: left;
      }
      // :host([title]) {
      //   background-color: rgb(250, 238, 220);
      // }
      // :host(:hover) {
      //   background-color: rgb(246, 225, 193);
      // }
      #fpass {
        float: right;
      }
      input {
        margin: 5px;
      }
      #login,
      #pass {
        padding: 5px;
        width: 280px;
        margin-bottom: 15px;
        border: black;
        background-color: antiquewhite;
        border-radius: 3px;
      }
      #submit {
        margin: 40px auto;
        display: block;
        padding: 5px 35px;
        text-align: center;
        font-size: 17px;
        border-radius: 15px;
        background-color: #86cdce;
        border: none;
      }
      #submit:hover {
        background-color: #4eb4b6;
        text-shadow: 3px 3px 10px;
      }
      @media only screen and (max-width: 1024px) {
        #login,
        #pass {
          width: 90%;
        }
      }
      @media only screen and (max-width: 600px) {
        #login,
        #pass {
          width: 95%;
        }
        #submit {
          padding: 5px 60px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="form">
        <label for="login">Email</label>
        <input
          type="text"
          name="login"
          id="login"
          required
          @input="${(event) => (this.email = event.target.value)}"
        />
        <label for="pass">Password</label>
        <input
          type="password"
          name="pass"
          id="pass"
          required
          @input="${(event) => (this.pass = event.target.value)}"
        />

        <input type="checkbox" name="remember" id="remember" />
        <label for="remember">Remember Me</label>
        <button type="submit" id="submit" @click="${this.signIn}">
          Sign in
        </button>
      </div>
    `;
  }

  filter(item) {
    if (!this.email) {
      return false;
    }
    const regex = new RegExp(this.email, "i");
    const response = regex.test(item.email);
    return response;
  }

  signIn() {
    if (!this.users || !this.email) {
      return;
    }

    this.users
      .filter((item) => this.filter(item))
      .map((user) => {
        if (user.pass === this.pass) {
          const senderInfo = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
          };
          
          sessionStorage.setItem("user", JSON.stringify(senderInfo));
          window.location = "#chat";
        } else {
          alert(
            "Please, enter email and password correctly. If you have not an account yet, please sign up first."
          );
        }
      });
  }

  connectedCallback() {
    super.connectedCallback();
    RestClient.call("/api/client/getClientInfo")
      .then((result) => {
        console.log(result);
        this.users = result;
      })
      .catch((error) => console.log(error));
  }

  emptyInputValues() {
    this.email = "";
    this.pass = "";
  }

  constructor() {
    super();
    this.tooltip = `Hello world`;
    this.emptyInputValues();
  }
}

customElements.define(AppSigninForm.is, AppSigninForm);
