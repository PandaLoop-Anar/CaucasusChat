import { LitElement, html, css } from "lit-element";
import "./pages/app-main-page.js";
import "./pages/app-signup-page.js";
import "./pages/app-chat-page.js";

class AppRoot extends LitElement {
  static get is() {
    return "app-root";
  }

  static get properties() {
    return {
      page: { type: String },
    };
  }
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .container {
        width: 1000px;
        margin: 0 auto;
        background-color: snow;
      }
      header {
        height: 100px;
      }
      .header-block {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding: 3px 15px;
      }
      .logo {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }
      .logo-img {
        width: 80px;
        margin: 0 20px;
      }

      @media (max-width: 1024px) {
        .container {
          width: 80vw;
        }
      }
      @media (max-width: 600px) {
        .container {
          display: flex;
          flex-flow: column;
          width: 100vw;
        }
      }
    `;
  }

  render() {
    return html`
      <header>
        <div class="container">
          <div class="header-block">
            <div class="logo">
              <img
                src="./assets/logo-Caucasus-Winter-Bonanza-Richard-Tyler.jpg"
                alt="logo"
                class="logo-img"
              />
              <h1>CaucasusChat</h1>
            </div>
            <div class="nav-bar">
              <a href="#main">Main</a> | <a href="#chat">Chat</a> |
              <a href="#signUp">Sign Up</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="container">
          ${this.page === "main" ? html`<app-main-page></app-main-page>` : ""}
          ${this.page === "chat" ? html`<app-chat-page></app-chat-page>` : ""}
          ${this.page === "signUp"
            ? html`<app-signup-page></app-signup-page>`
            : ""}
        </div>
      </main>
    `;
  }
  constructor() {
    super();
    this.page = "main";
  }

  connectedCallback() {
    super.connectedCallback();
    this.onRouteChange();
    window.addEventListener("popstate", () => this.onRouteChange());
  }
  onRouteChange() {
    if (window.location.hash) {
      this.page = window.location.hash.substring(1);
    }
  }
}

customElements.define(AppRoot.is, AppRoot);
