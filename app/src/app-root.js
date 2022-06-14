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
      .nav-bar {
        margin: 10px 5px;
      }
      .nav-bar a {
        padding: 5px 15px;
        text-decoration: none;
        text-align: center;
        font-size: 17px;
        border-radius: 15px;
        background-color: #4eb4b6;
        color: snow;
        border: none;
      }
      .nav-bar a:hover {
        box-shadow: 0.5px 1px 5px black;
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
        .header-block {
          justify-content: center;
        }
        .logo-img {
          width: 50px;
          margin: 0 5px;
        }
        .logo h1 {
          font-size: 21px;
        }
        .nav-bar a {
          padding: 2px 8px;
          font-size: 15px;
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
              <a href="#main">Main</a> |
              ${this.checkLogedinUser()
                ? html`<a href="#chat">Chat</a> |
                    <a href="#main" @click="${this.signOut}">Sign out</a> |`
                : ""}
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

  checkLogedinUser() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  signOut() {
    sessionStorage.removeItem("user");
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
