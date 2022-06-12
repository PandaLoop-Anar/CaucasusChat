import { LitElement, html, css } from "lit-element";
import "../components/app-signin-form.js";

class AppMainPage extends LitElement {
  static get is() {
    return "app-main-page";
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
      .section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px auto;
        grid-gap: 20px;
      }
      .section-img {
        background-image: url(https://i.pinimg.com/originals/08/80/99/08809940d40530bfdb457d7a60466657.jpg);
        background-size: cover;
        min-height: 700px;
        width: 500px;
      }
      .section-img-h2 {
        text-align: center;
        margin-top: 85px;
        text-shadow: 3px 3px 20px;
        color: rgb(83, 116, 95);
        font-size: 30px;
      }
      .section-login {
        margin: 20px auto;
      }
      .section-login h2 {
        text-align: center;
        font-size: 32px;
      }
      .section-login h3 {
        margin-top: 55px;
        margin-bottom: 60px;
        text-shadow: 3px 3px 18px;
        text-align: center;
      }
    `;
  }

  render() {
    return html`
      <div class="section">
        <div class="section-img">
          <h2 class="section-img-h2">
            Explore The <br />
            Caucasian Lifestyle
          </h2>
        </div>
        <div class="section-login">
          <h2>
            Welcome to <br />
            CaucasusChat
          </h2>
          <h3>Sign in to continue</h3>

          <app-signin-form tooltip="Sign in page"></app-signin-form>

          <h4>
            Don't have an account?
            <a href="#signUp" id="signupLink">Sign up now</a>
          </h4>
        </div>
      </div>
    `;
  }

  constructor() {
    super();
    this.tooltip = `Hello world!`;
  }
}

customElements.define(AppMainPage.is, AppMainPage);
